#!/bin/bash
# Fix everything in one shot
echo "=== FaithMeet VPS Fix ==="

# 1. Find PHP-FPM socket
SOCKET=$(find /run/php/ -name "*.sock" 2>/dev/null | head -1)
if [ -z "$SOCKET" ]; then
    SOCKET=$(find /var/run/php/ -name "*.sock" 2>/dev/null | head -1)
fi
echo "PHP-FPM socket: $SOCKET"

# 2. Check PHP SQLite
php -r 'echo "PDO_SQLite: " . (extension_loaded("pdo_sqlite") ? "OK" : "MISSING") . "\n";' 2>&1

# 3. Install sqlite if missing
if ! php -m 2>/dev/null | grep -qi pdo_sqlite; then
    echo "Installing php-sqlite3..."
    PHPVER=$(php -v 2>/dev/null | head -1 | grep -oP '\d+\.\d+')
    apt-get install -y php${PHPVER}-sqlite3 2>/dev/null
    systemctl restart php${PHPVER}-fpm 2>/dev/null
fi

# 4. Fix data permissions
mkdir -p /var/www/parejas/data /var/www/parejas/uploads
chown -R www-data:www-data /var/www/parejas/data /var/www/parejas/uploads
chmod 775 /var/www/parejas/data
chmod 775 /var/www/parejas/uploads

# 5. Write nginx config with correct socket
cat > /etc/nginx/sites-available/parejas << ENDNGINX
server {
    listen 80;
    server_name parejas.centralchat.pro;
    return 301 https://\$host\$request_uri;
}
server {
    listen 443 ssl;
    server_name parejas.centralchat.pro;
    ssl_certificate /etc/letsencrypt/live/parejas.centralchat.pro/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/parejas.centralchat.pro/privkey.pem;
    root /var/www/parejas;
    index index.html index.php;
    location / { try_files \$uri \$uri/ =404; }
    location ~ \.php\$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:${SOCKET};
        fastcgi_param SCRIPT_FILENAME \$document_root\$fastcgi_script_name;
        include fastcgi_params;
    }
    location /uploads/ { alias /var/www/parejas/uploads/; }
    location /data/ { deny all; }
    location ~ /\.ht { deny all; }
    location ~ /\.git { deny all; }
}
ENDNGINX

ln -sf /etc/nginx/sites-available/parejas /etc/nginx/sites-enabled/parejas
nginx -t 2>&1 && systemctl reload nginx && echo "NGINX: OK"

# 6. Test PHP endpoint
RESULT=$(curl -sk https://parejas.centralchat.pro/api/test.php 2>&1)
echo "API test: $RESULT"

echo "=== DONE ==="

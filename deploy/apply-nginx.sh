#!/bin/bash
cat > /etc/nginx/sites-available/parejas << 'EOF'
server {
    listen 80;
    server_name parejas.centralchat.pro;
    return 301 https://$host$request_uri;
}
server {
    listen 443 ssl;
    server_name parejas.centralchat.pro;
    ssl_certificate /etc/letsencrypt/live/parejas.centralchat.pro/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/parejas.centralchat.pro/privkey.pem;
    root /var/www/parejas;
    index index.html index.php;
    location / { try_files $uri $uri/ =404; }
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
    location /uploads/ { alias /var/www/parejas/uploads/; }
    location /data/ { deny all; }
    location ~ /\.ht { deny all; }
    location ~ /\.git { deny all; }
}
EOF
nginx -t && systemctl reload nginx && echo "NGINX OK"

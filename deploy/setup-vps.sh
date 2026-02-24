#!/bin/bash
# Setup script for FaithMeet on VPS
# Run: bash /var/www/parejas/deploy/setup-vps.sh

set -e

echo "=== Setting up FaithMeet ==="

# Copy nginx config
cp /var/www/parejas/deploy/nginx-parejas.conf /etc/nginx/sites-available/parejas
ln -sf /etc/nginx/sites-available/parejas /etc/nginx/sites-enabled/parejas

# Test nginx config
nginx -t

# Create data directory with proper permissions
mkdir -p /var/www/parejas/data
mkdir -p /var/www/parejas/uploads
chown -R www-data:www-data /var/www/parejas/data
chown -R www-data:www-data /var/www/parejas/uploads
chmod 755 /var/www/parejas/data
chmod 755 /var/www/parejas/uploads

# Reload nginx
systemctl reload nginx

echo "=== Nginx configured ==="
echo "=== Getting SSL certificate ==="

# Get SSL certificate with certbot
certbot --nginx -d parejas.centralchat.pro --non-interactive --agree-tos --email admin@centralchat.pro --redirect 2>/dev/null || echo "SSL: run certbot manually if needed"

echo "=== FaithMeet setup complete ==="
echo "Visit: https://parejas.centralchat.pro"

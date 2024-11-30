/var/named/htd.edu.vn.zone
/var/named/sgu.edu.vn.zone
mkdir -p /var/www/html/htd.edu.vn
mkdir -p /var/www/html/sgu.edu.vn
chown -R apache:apache /var/www/html/htd.edu.vn
chown -R apache:apache /var/www/html/sgu.edu.vn
chmod 755 /var/www
chmod 755 /var/www/html

nano /etc/httpd/conf/httpd.conf
thêm vào 
```
IncludeOptional conf.d/*.conf
NameVirtualHost *:80
```

nano /etc/httpd/conf.d/htd.edu.vn.conf
```
<VirtualHost *:80>
	ServerAdmin webmaster@htd.edu.vn
	DocumentRoot /var/www/html/htd.edu.vn
	ServerName htd.edu.vn.vn
	ServerAlias fit.edu.vn.vn
</VirtualHost>

nano /etc/httpd/conf.d/sgu.edu.vn.conf
<VirtualHost *:80>
	ServerAdmin webmaster@sgu.edu.vn
	DocumentRoot /var/www/html/sgu.edu.vn
	ServerName sgu.edu.vn
	ServerAlias fit.sgu.edu.vn
</VirtualHost>
```

nano /var/www/html/htd.edu.vn/index.html
nano /var/www/html/sgu.edu.vn/index.html

chmod +x /var/www/html/htd.edu.vn/index.html
chmod +x /var/www/html/sgu.edu.vn/index.html

systemctl enable httpd
systemctl start httpd
systemctl restart httpd
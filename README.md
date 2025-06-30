# 把打包后的dist文件夹上传到服务器/var/www/vue-app目录
# 配置Nginx
```server {
    listen 80;
    server_name example.com;  # 访问域名

    root /var/www/vue-app/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
   location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff2|mp4|mp3)$ {
        expires 1y;
        add_header Cache-Control "public";
        access_log off;
    }

    location /api {
        proxy_pass http://your-api-server.com; # 接口域名
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
# 启用配置并重启 Nginx

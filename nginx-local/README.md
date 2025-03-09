## Run a nginx docker container locally

### Modify the  proxy_pass in the web.conf
```
server {
    listen          80;
    listen          [::]:80;
    server_name     demo.com;
    
    location / {
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_pass   http://127.0.0.1:3000;
    }
}
```

### Start method: 
```bash
sh start_nginx.sh
```

### Test
```bash
curl localhost
```

#!/bin/bash


docker -v  
if [ $? -gt 0 ]; then
    echo "Exit, please install docker first."; 
    exit 1;
fi

docker rm -f nginx-local
docker run --name nginx-local -p 80:80  -v  `pwd`/web.conf:/etc/nginx/conf.d/default.conf  -d nginx

# Show log, if do not need, comment this line 
docker logs -f nginx-local

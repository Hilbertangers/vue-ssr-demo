#! /bin/bash

rsync -arlcv --exclude node_modules/ . root@172.18.10.90:/var/www/jjmmw/pc-ssr/
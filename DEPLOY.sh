#!/bin/sh

curl https://gitlab.com/bunsim/geph-autoupdate/-/raw/master/stable.json > src/versions.json
npm run build
rsync -avz  --delete ./dist/ root@central.geph.io:/var/www/next.geph.io/

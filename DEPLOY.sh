#!/bin/sh

curl https://sos-ch-dk-2.exo.io/utopia/geph-releases/metadata.yaml | yq -j > src/versions.json
npm run build
rsync -avz  --delete ./dist/ root@central.geph.io:/var/www/next.geph.io/

#!/bin/bash

# echo 'remote starting...'

# git add .

# git commit -m 'commit'

# git push prod master

# echo 'done'

npm run build

scp -r ./dist/* root@101.200.184.27:/www/wwwroot/admin

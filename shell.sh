#!/bin/bash

echo 'remote starting...'

git add .

git commit -m 'commit'

git push prod master

echo 'done'

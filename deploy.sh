#!/bin/bash

git pull

echo "Lmao Building Server!"
docker-compose -f ./server/docker-compose.yml up -d --build
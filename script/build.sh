#!/bin/bash

REGISTRY_URL=chrisgray0626
IMAGE_NAME=gis-agent-frontend
IMAGE_TAG=0.1
# Change to the root directory
cd ..
# Build the image
docker build -t ${REGISTRY_URL}/${IMAGE_NAME}:latest .
# Tag the image
docker tag ${REGISTRY_URL}/${IMAGE_NAME}:latest ${REGISTRY_URL}/${IMAGE_NAME}:${IMAGE_TAG}
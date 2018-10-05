#!/bin/bash
export VERSION=7.3
docker build -f Dockerfile7 . -t wkulhanek/sonarqube:${VERSION}
docker tag wkulhanek/sonarqube:${VERSION} wkulhanek/sonarqube:latest
docker push wkulhanek/sonarqube:${VERSION}
docker push wkulhanek/sonarqube:latest

#!/bin/bash

set -eux

docker-compose run --rm -p 8080:8080 demo-api stack ghci
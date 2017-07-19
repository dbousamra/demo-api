#!/bin/bash

set -eux

docker-compose run --rm demo-api stack build --exec demo-api --file-watch
#!/bin/bash

set -eu

docker-compose run --rm skeleton-haskell stack build --exec skeleton-haskell --file-watch
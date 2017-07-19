#!/bin/bash

set -eux

docker run \
    --rm \
    --add-host demo-api-db:$HOST_IP \
    -v $(pwd)/data/sql/:/root/sql \
    dhoer/flyway:latest \
      -url=jdbc:postgresql://$DB_HOST:$DB_PORT/$DB_NAME \
      -user=$DB_USERNAME \
      -password=$DB_PASSWORD \
      -locations=filesystem:/root/sql \
      migrate


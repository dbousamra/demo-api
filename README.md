# Demo API

StackOverflow for CS:GO demos!

## Installation

1. Clone the repository:

    ```bash
    $ git clone git@github.com:dbousamra/demo-api.git
    ```

2. Start the app inside a Docker container:

    ```bash
    $ docker-compose up
    ```

3. Create a database and run migrations:

    ```bash
    docker-compose up -d demo-api-db
    docker-compose run --rm demo-api-db createdb demos -h demo-api-db -U postgres

    python ./scripts/run_migration.py
    ```

    Confirm that `demos` db was created successfully:

    ```bash
    $ docker-compose run --rm demo-api-db psql demos -h demo-api-db -U postgres -c "\\list"

                                         List of databases
       Name      |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges

    -------------|----------|----------|------------|------------|--------------------
     demos       | postgres | UTF8     | en_US.utf8 | en_US.utf8 |
     postgres    | postgres | UTF8     | en_US.utf8 | en_US.utf8 |
     template0   | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres
                 |          |          |            |            | postgres=CTc/postgres
     template1   | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres
                 |          |          |            |            | postgres=CTc/postgres
    (4 rows)
    ```

4. See if the server is running:

     `http get http://localhost:8080/health`


## Running

Just run `docker-compose up`. This will load up the `demo-db` container and the `demo-api` container, and also invoke `npm run build` inside the `demo-client` container (which promptly terminates.

## Rebuilding on changes

dc down
dc up --build

## Scripts

#### build_client.sh

In order to rebuild the javascript, we invoke `webpack` via npm inside the `demo-client` docker-compose service.

#### ghci.sh.sh

This is used to load up GHCI.
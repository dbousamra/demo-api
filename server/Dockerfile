FROM haskell:8.0.2
MAINTAINER Dominic Bou-Samra <dom@imageintelligence.com>

WORKDIR /app/server

# optionally cache the package index too
RUN stack update

COPY demo-api.cabal /app/server
COPY stack.yaml /app/server

RUN stack install --only-dependencies

COPY . /app/server

RUN stack install

CMD ["stack","exec","demo-api"]

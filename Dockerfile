FROM haskell:8.0.2
MAINTAINER Dominic Bou-Samra <dom@imageintelligence.com>

WORKDIR /app/demo-api

# optionally cache the package index too
RUN stack update

COPY demo-api.cabal /app/demo-api
COPY stack.yaml /app/demo-api

RUN stack install --only-dependencies

COPY . /app/demo-api

RUN stack install

CMD ["stack","exec","demo-api"]

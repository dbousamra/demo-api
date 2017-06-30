FROM haskell:8.0.2
MAINTAINER Dominic Bou-Samra <dom@imageintelligence.com>

WORKDIR /app/skeleton-haskell

COPY skeleton-haskell.cabal /app/skeleton-haskell
COPY stack.yaml /app/skeleton-haskell

RUN stack install --only-dependencies

COPY . /app/skeleton/haskell

RUN stack install

CMD ["stack","exec","skeleton-haskell"]

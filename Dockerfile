FROM haskell:8.0.2
MAINTAINER Dominic Bou-Samra <dom@imageintelligence.com>

COPY . /app/skeleton-haskell

WORKDIR /app/skeleton-haskell

RUN stack build

CMD ["stack","exec","skeleton-haskell"]

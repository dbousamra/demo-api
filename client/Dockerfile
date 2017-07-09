FROM node:boron
MAINTAINER Dominic Bou-Samra <dom@imageintelligence.com>

WORKDIR /app/client

COPY . /app/client

RUN npm install

CMD node src/server.js
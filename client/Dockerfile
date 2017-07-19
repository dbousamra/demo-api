FROM node:boron
MAINTAINER Dominic Bou-Samra <dom@imageintelligence.com>

WORKDIR /app/client

COPY package.json /app/client/
RUN npm install

COPY . /app/client

CMD npm run webpack
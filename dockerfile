FROM node:10.16-alpine
MAINTAINER cryptic-game

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install
RUN npm install react-scripts -g

CMD [ "npm", "start" ]

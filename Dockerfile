FROM node:12.2.0-alpine

MAINTAINER faq@cryptic-game.net

WORKDIR /app
ADD . /app

RUN npm i -g npm && npm i -g yarn


RUN yarn
RUN yarn build
EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["yarn", "start"]
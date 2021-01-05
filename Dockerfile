FROM node:14-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm ci

COPY . ./
RUN npm run build

EXPOSE 3000
ENV HOST 0.0.0.0

ENTRYPOINT ["npm", "run", "start"]

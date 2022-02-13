FROM node:alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm i

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . ./

CMD ["npm", "start"]
FROM node:12

RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install --no-cache

COPY . /app

CMD [ "npm", "start"]

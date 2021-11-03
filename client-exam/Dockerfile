FROM node:12

WORKDIR /
COPY ../client .

RUN npm install
RUN npm install -g nodemon
CMD [ "npm", "start"]

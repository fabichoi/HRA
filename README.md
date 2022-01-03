# Hanja Remembering Assistant

## Requirements
* docker with docker-compose
* Node.js
* MongoDB

## Installation Guide
1. make and add .env file in client and server folder.
```
# client/.env
PORT=3333
```
```
# server/.env
PORT=3000
MONGO_URI="mongodb://mongodb:27017/hra_db"
SECRET_KEY=CuStOmSecRetKey123!@#
JWT_SECRET=CuStOmSecRetKey_TK123!@#
```
2. build client and server
```
# client build
$ cd client
$ npm install
$ npm build
```
```
# server build
$ cd server
$ npm install
$ npm build
```
3. docker-compose (execute admin permission if it needs)
```
$ docker-compose up -d --build
```
## URI
```
http://localhost
```
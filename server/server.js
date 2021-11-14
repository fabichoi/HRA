require("dotenv").config({
    path: process.env.NODE_ENV == "production" ? ".env" : ".env.dev"
});
const dotenv = require('dotenv');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('cors');

const app = new Koa();
const router = new Router();
const api = require('./routes');
const {jwtMiddleware} = require('./lib/token');

const corsOptions = {
    origin: '',
    credentials: true,
}

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((response) => {
        console.log('Successfully connected to mongodb');
    })
    .catch(e => {
        console.error(e);
    });

app.use(bodyParser());
app.use(jwtMiddleware);
//app.use(cors());

router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`HRA server has started on port ${process.env.PORT}`);
});
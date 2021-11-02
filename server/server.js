require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const cors = require('cors');

const app = new Koa();
const router = new Router();
const api = require('./routes');
const {jwtMiddleware} = require('./lib/token');

const {PORT, MONGO_URI} = process.env;

const corsOptions = {
    origin: '',
    credentials: true,
}

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
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

app.listen(PORT, '0.0.0.0', () => {
    console.log(`HRA server has started on port ${PORT}`);
});
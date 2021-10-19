require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
var cors = require('cors');

const app = new Koa();
const router = new Router();
const api = require('./api');
const { jwtMiddleware } = require('./lib/token');

const corsOptions = {
    origin: '',
    credentials: true,
}

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
mongoose.Promise = global.Promise;
const mongoUri = 'mongodb://' + process.env.DB_IP
mongoose.connect(mongoUri, {
    useNewUrlParser: true,    
}).then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
});

const port = process.env.PORT || 80;


app.use(bodyParser());
app.use(jwtMiddleware);
//app.use(cors());


router.use('/api', api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log("HSS(Hanja Study System) server has started on port " + port);
})
const Router = require('koa-router');
const api = new Router();
const auth = require('./auth.routes');
const hanja = require('./hanja.routes');

api.use('/v1/auth', auth.routes());
api.use('/v1/hanja', hanja.routes());

module.exports = api;
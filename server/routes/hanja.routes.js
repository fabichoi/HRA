const Router = require('koa-router');
const hanja = new Router();
const hanjaCtrl = require('../controllers/hanja.controller');

// 급수별 한자 출력
hanja.get("/:level", hanjaCtrl.findByLevel);

module.exports = hanja;
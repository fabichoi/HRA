const Router = require('koa-router');
const hanja = new Router();
const hanjaCtrl = require('../controllers/hanja.controller');

// 급수별 한자 출력
hanja.get("/level/:level", hanjaCtrl.findByLevel);
// 한자 조회
hanja.get("/search", hanjaCtrl.findByMs);
module.exports = hanja;
const Router = require('koa-router');
const hanja = new Router();
const hanjaCtrl = require('../controllers/hanja.controller');
const evalCtrl = require('../controllers/eval.controller');

// 급수별 한자 출력
hanja.get("/learn/level/:level", hanjaCtrl.findByLevel);
// 결과 저장
hanja.post("/learn/result/", evalCtrl.setResult);
// 한자 조회
hanja.get("/search", hanjaCtrl.findByMs);
module.exports = hanja;

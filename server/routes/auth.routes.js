const Router = require('koa-router');
const auth = new Router();
const authCtrl = require('../controllers/auth.controller');

auth.post('/register/local', authCtrl.localRegister); // 로컬 계정 등록
auth.post('/login/local', authCtrl.localLogin); // 로컬 계정으로 로그인
auth.get('/exists/:key(email|username)/:value', authCtrl.exists); // 이메일/아이디 존재 유무 확인
auth.post('/logout', authCtrl.logout); // 로그아웃
auth.get('/check', authCtrl.check); // 로그인된 유저 정보 확인

module.exports = auth;
module.exports = app => {
    const hanja = require("../controllers/hanja.controller");
    const router = require("express").Router();

    // 급수별 한자 출력
    router.get("/:level", hanja.findByLevel);

    app.use('/api/v1/hanja', router);
};
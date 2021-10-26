module.exports = app => {
    const hanja = require("../controllers/hanja.controller");
    var router = require("express").Router();

    router.post("/", hanja.create);
    router.get("/", hanja.findAll);
    router.get("/published", hanja.findAllPublished);
    router.get("/:id", hanja.findOne);
    router.put("/:id", hanja.update);
    router.delete("/:id", hanja.delete);
    router.delete("/", hanja.deleteAll);

    app.use('/api/hanja', router);
};
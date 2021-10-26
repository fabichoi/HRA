const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.hanja = require("./hanja.model.js")(mongoose);

module.exports = db;
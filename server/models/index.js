const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.hanjas = require("./hanja.model.js");

module.exports = db;
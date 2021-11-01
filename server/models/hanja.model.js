const mongoose = require('mongoose');

const hanjaSchema = new mongoose.Schema({
    level: Number, shape: String, mean: String, sound: String
}, {
    versionKey: false
});

hanjaSchema.statics.findByLevel = function (level) {
    return this.find({level: parseInt(level)});
};

module.exports = mongoose.model("hanja", hanjaSchema);
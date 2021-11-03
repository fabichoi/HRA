const mongoose = require('mongoose');
const { Schema } = mongoose;

const hanjaSchema = new Schema({
    level: Number, shape: String, mean: String, sound: String
}, {
    versionKey: false
});

hanjaSchema.statics.findByLevel = function (level) {
    return this.find({'level': level}).exec();
};

module.exports = mongoose.model("hanja", hanjaSchema);
const mongoose = require('mongoose');
const {Schema} = mongoose;

const evalSchema = new Schema({
    user_id: Number, hanja_id: Number, right_cnt: Number, wrong_cnt: Number
}, {
    versionKey: false
});

evalSchema.statics.findByHanjaId = function (hanja_id) {
    return this.find({'hanja_id': hanja_id}).exec();
};

module.exports = mongoose.model("hanja", hanjaSchema);
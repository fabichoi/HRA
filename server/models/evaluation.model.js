const mongoose = require('mongoose');
const {Schema} = mongoose;

const evalSchema = new Schema({
    user_id: String, hanja_id: Number, status: String, try_date: Date,
}, {
    versionKey: false
});

evalSchema.statics.setDatas = function (user_id, data) {
    for (let i = 0; i < data.length; i++) {
        new this({
            'user_id': user_id,
            'hanja_id': data[i].id,
            'status': data[i].status,
            'try_date': Date.now()
        }).save();
    }
    return null;
};

module.exports = mongoose.model("eval", evalSchema);

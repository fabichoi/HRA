const mongoose = require('mongoose');
const {Schema} = mongoose;

const hanjaSchema = new Schema({
    level: Number, shape: String, mean: String, sound: String
}, {
    versionKey: false
});

hanjaSchema.statics.findByLevel = function (level, params) {
    let order = {};
    const limit = parseInt(params.limit);
    order[params.order] = 1;
    if (params.order == 'random') {
        return this.aggregate(
            [
                {
                    $match: {level: parseInt(level)}
                },
                {
                    $sample: {size: limit}
                }
            ]);
    }
    return this.find({'level': level}).sort(order).limit(limit).exec();
};

hanjaSchema.statics.findByRandom = function (level, params) {
    let order = {};
    const limit = parseInt(params.limit);
    order[params.order] = 1;
    return this.find({'level': level}).sort(order).limit(limit).exec();
    /*
    db.hanjas.aggregate(
    [ {$match : {level: 80}}, {$sample: { size: 10 } } ]
    )
    */
};

hanjaSchema.statics.findByMs = function (ms) {
    return this.find({'mean': ms.mean, 'sound': ms.sound}).exec();
};

module.exports = mongoose.model("hanja", hanjaSchema);
const mongoose = require('mongoose');

const hanjaSchema = new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    level: Number,
    shape: String,
    mean: String,
    sound: String
});

hanjaSchema.statics.create = function (payload) {
    const hanja = new this(payload);
    return hanja.save();
};

hanjaSchema.statics.findAll = function () {
    return this.find({});
};

hanjaSchema.statics.findOneByHanjaId = function (hanjaId) {
    return this.findOne({id: hanjaId});
};

hanjaSchema.statics.updateByHanjaId = function (hanjaId, payload) {
    return this.findOneAndUpdate({hanjaId}, payload, {new: true});
}

hanjaSchema.statics.deleteByHanjaId = function (hanjaId) {
    return this.remove({hanjaId});
}

module.exports = mongoose.model('Hanja', hanjaSchema);
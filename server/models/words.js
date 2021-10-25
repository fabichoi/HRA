const mongoose = require('mongoose');

const wordsSchema = new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    shapes: String,
    sounds: String
});

module.exports = mongoose.model('Words', wordsSchema);
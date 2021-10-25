const mongoose = require('mongoose');

const hanjaSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    level: Number,
    shape: String,
    mean: String,
    sound: String
})
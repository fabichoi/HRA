require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const {PORT, MONGO_URI} = process.env;

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(e => console.error(e));

app.use('/hanjas', require('./routes/hanjas'));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`HRA server has started on port ${PORT}`);
});
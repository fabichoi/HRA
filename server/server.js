require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {PORT, MONGO_URI} = process.env;

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./routes/hanja.routes')(app);

const db = require("./models");
db.mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(e => console.error(e));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`HRA server has started on port ${PORT}`);
});
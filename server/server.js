var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

var server = app.listen(3333, function() {
    console.log("Hanja server has started on port 3333");
});

var router = require('./router/main')(app);


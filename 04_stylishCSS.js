var express = require('express');
var app = express();

var port = process.argv[2];
var filePath = process.argv[3];

app.use(require('stylus').middleware(filePath))
app.use(express.static(filePath));

app.listen(port);
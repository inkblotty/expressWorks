var express = require('express');
var path = require('path');
var app = express();

var port = process.argv[2];
var pathName = process.argv[3];

app.use(express.static(pathName || path.join(pathName, 'public')));

app.listen(port);
var express = require('express');
var app = express();

app.get('/search', function(req, res) {
	var stuff = req.query;
	res.send(stuff);
});

app.listen(process.argv[2]);
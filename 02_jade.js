var express = require('express');
//var jade = require('jade');
var app = express();

var port = process.argv[2];
var file = process.argv[3];

app.set('view engine', 'jade');

app.get('/home', function(req, res) {
	res.render(file, {date: new Date().toDateString()});
});

app.listen(port);

/* Official Solution:
	var express = require('express');
	var app = express();
	app.set('view engine', 'jade');
	app.set('views', process.argv[2]);

	app.get('/home', function(req, res) {
		res.render('index', {date: new Date().toDateString()});
	})

	app.listen(process.argv[2]);
*/
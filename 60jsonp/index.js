var express = require('express');
var app = express();

app.get('/callback=:cb', function(req, res) {
	const fn = req.params.cb;
	const info = {name: 'eric', age: 20};
	res.send(fn+'('+JSON.stringify(info)+')');
});

app.listen(3000);
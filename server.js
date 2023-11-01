/**
* Main file to load middlewares and start core-api.
*
* @author: [Nikhil Singhal]
**/


var express = require('express'),
	routes = require('./routes');

var app = express();
app.use('/', routes);


app.listen(3049, function () {
	console.log(('INDIFI-APP-API server running' ));
});
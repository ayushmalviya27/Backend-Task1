var express = require('express');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

app.get('/', function(request,response){
	response.render('login.ejs');
})

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log('App running on port ' + port);
});
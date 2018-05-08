var express = require('express');
var logger = require('morgan');

var admin = require('firebase-admin');

var serviceAccount = require('./backend-task-firebase-adminsdk-hi0gg-f721b9e21a.json');

var firebaseAdmin = admin.initializeApp({
	credential : admin.credential.cert(serviceAccount),
	databaseURL : "https://backend-task.firebaseio.com"
});

var database = firebaseAdmin.database();

var app = express();

app.set('view-engine', 'ejs');

app.use(express.static('views'));
app.set('views', __dirname + '/views');

app.use(logger('dev'));

app.get('/', function(request,response){
	response.render('home.ejs');
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log('App running on port ' + port);
});
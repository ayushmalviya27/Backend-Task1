var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

const admin =require('firebase-admin');

var serviceAccount = require('./first-project-2208-firebase-adminsdk-mqy9i-bef0559ea9.json');

var firebaseAdmin = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseUrl: 'https://first-project-2208.firebaseio.com'
});

const database = admin.database();

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('views'));
app.set('views', __dirname + '/views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use(logger('dev'));

app.get('/', function(request,response) {
	  var restref = database.ref('/Restaurants');
	//  restref.on('value', function(snapshot){
	//  	var data = snapshot.val();
	//  	console.log(data);
	// });
	response.render('home.ejs');
});

app.post('/', function(request,response) {
	var breakfast = request.body.breakfast;
	response.render('results.ejs', {data: breakfast})
}); 

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log('App running on port ' + port);
});
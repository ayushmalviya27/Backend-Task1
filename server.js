var express = require('express')
var logger = require('morgan')

var app = express()

app.set('view engine', 'ejs')

app.use(express.static('views'))
app.set('views', __dirname + '/views')
app.use(logger('dev'))

app.get('/',function(request,response){
	response.render('home.ejs')
})

app.listen(3000, function(){
	console.log('App started successfully')
})
var express = require('express')
var logger = require('morgan')
var nodemailer = require('nodemailer');
var credentials = require('./Credentials.js');

var app = express()

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: credentials.mailID,//mail,
        pass: credentials.passw
    }
});

app.set('view engine', 'ejs')

app.use(express.static('views'))
app.set('views', __dirname + '/views')
app.use(logger('dev'))

app.get('/',function(request,response){
response.render(__dirname + '/views/home.ejs');
});

app.get('/send',function(req,res){
var mailOptions={
   to : req.query.user_email,
   subject : 'Welcome to Generic app',
   text : 'You have successfully Signed Up for Generic app'
}
console.log(mailOptions);
	smtpTransport.sendMail(mailOptions, function(error, response){
		if(error){
		console.log(error);
		res.end("error");
		}
		else{
		console.log("Message sent: " + response.message);
		res.end("sent");
		}
	});
});

app.listen(3000, function(){
	console.log('App started successfully')
})
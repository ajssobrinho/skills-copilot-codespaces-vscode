//Create web server
var express = require('express');
var app = express();
var fs = require('fs');
// Use the static files in the public directory
app.use(express.static('public'));

// Use the ejs template engine
app.set('view engine', 'ejs');

// Use the body-parser middleware to parse the body of the request
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Use the express-session middleware
var session = require('express-session');
app.use(session({ secret: "secret" }));

// Use the express-validator middleware
var expressValidator = require('express-validator');
app.use(expressValidator());

// Use the express-flash middleware
var flash = require('express-flash');
app.use(flash());

// Use the connect-mongo middleware
var MongoStore = require('connect-mongo')(session);
app.use(session({
    secret: "secret",
    store: new MongoStore({ url: 'mongodb://localhost/comments' })
}));

// Use the express-fileupload middleware
var fileUpload = require('express-fileupload');
app.use(fileUpload());

// Use the nodemailer middleware
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '

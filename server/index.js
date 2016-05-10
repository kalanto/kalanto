//dependencies
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var mongoose = require('mongoose');
var cors = require ('cors');
var bodyParser = require('body-parser');
var keys = require('../kalanto/keys.js');
// var Customer = require('./Schema/customer.js');
var customerEndPointControl = require('./customerEndPointControl.js');
var attorneyEndPointControl = require('./attorneyEndPointControl.js');
//application and database setup
var app = express();
// console.log(__dirname);
app.use(express.static(__dirname + './../public'));
app.use(session({secret: keys.keys}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/database');

//end points for customers/clients
app.post('/customers/add', customerEndPointControl.postCustomer);
app.get('/customers/get', customerEndPointControl.getCustomer);
app.get('/customers/get/:id',customerEndPointControl.getOneCustomer);
app.put('/customers/put/:id', customerEndPointControl.updateCustomer);
app.delete('/customers/delete/:id', customerEndPointControl.deleteCustomer);
//end point for Attorney
app.post('/attorney/add', attorneyEndPointControl.postAttorney);
app.get('/attorney/get', attorneyEndPointControl.getAttorney);
app.get('/attorney/get/:id',attorneyEndPointControl.getOneAttorney);
app.put('/attorney/put/:id', attorneyEndPointControl.updateAttorney);
app.delete('/attorney/delete/:id', attorneyEndPointControl.deleteAttorney);

app.listen('3000', function(){
   console.log('The N.S.A. is twerking on port 3000');
});

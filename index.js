//dependencies
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var mongoose = require('mongoose');
var cors = require ('cors');
var bodyParser=require('body-parser');
var keys = require('./kalanto/keys.js');
var Customer = require('./public/js/customer/customer.js');
var endPointControl = require ('./server/endPointControl.js');
//application and database setup
var app = express();
console.log(__dirname);
app.use(express.static(__dirname + '/public'));
app.use(session({secret: keys.keys}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/database');

//end points in controller
app.post('/customers/add', endPointControl.postCustomer);
app.get('/customers/get', endPointControl.getCustomer);
app.get('/customers/get/:id',endPointControl.getOneCustomer);
app.put('/customers/put/:id', endPointControl.updateCustomer);
app.delete('/customers/delete/:id', endPointControl.deleteCustomer);

app.listen('3000', function(){
   console.log('NSA twerking on port 3000');
});

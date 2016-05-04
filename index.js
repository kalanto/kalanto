//dependencies
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var mongoose = require('mongoose');
var cors = require ('cors');
var bodyParser=require('body-parser');
// var FacebookStrategy = require('passport-facebook').Strategy;
var keys = require('./kalanto/keys.js');
var Customer = require('./public/js/customer/customer.js');
//application and database setup
var app = express();
console.log(__dirname);
app.use(express.static(__dirname + "/public"));
app.use(session({secret: keys.keys}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/database');

//end points
app.post('/customers/add', function(req, res){
   console.log(req.body);
   var customer = new Customer(req.body);
   customer.save(function(err, status){
      console.log(err);
      return err ? res.status(500).send(err) : res.send(status);
   });
});
app.get('/customers/get', function(req, res, next){
   var query = req.query;
   Customer.find(query, function(err, response){
      if(err){
         res.status(500).json(err);
      }
      else{
         res.json(response);
      }
   });
});
app.get('/customers/get/:id', function(req,res,next){
   Customer.findOne(req.params.id, function(err, response){
      if(err){
         res.status(500).send(err);
      }
      else{
         res.send(response);
      }
   });
});
app.put('/customers/put/:id', function(req, res, next){
   Customer.findOneAndUpdate(req.params.id, function(err, response){
      if(err){
         res.status(500).send(err);
      }
      else{
         res.send(response.data);
      }
   });
});
app.delete('/customers/delete/:id', function(req,res,next){
   Customer.findOneAndRemove(req.query, function(err,response){
      if(err){
         return res.status(500).send(err);
      }
      else{
         return res.send(response);
      }
   });
});

//facebook Login code
// passport.use(new FacebookStrategy({
//    clientID: keys.facebookKey,
//     clientSecret: keys.facebookSecret,
//     callbackURL: 'http://localhost:3000/auth/facebook/callback'
// },function(token, refreshToken, profile, done) {
//    done(null, profile);
// }));
// passport.serializeUser(function(user, done) {
//    //go to mongo get _id for user, put that on session
//   done(null, user);
// });
// passport.deserializeUser(function(obj, done) {
//    //get data off of session ( see serializeUser)
//   done(null, obj);
//   //put it on req.user in EVERY ENDPOINT
// });
// app.get('/auth/facebook', passport.authenticate('facebook'));
// app.get('/auth/facebook/callback', passport.authenticate('facebook', {
//    successRedirect: '/me',
//    failureRedirect: '/'
// }));
// app.get('/me', function(req, res){
//    res.send(req.user);
// });
//end facebook Login
app.listen('3000', function(){
   console.log('NSA link connection running');
});

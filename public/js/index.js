var express = require('express');
var session = require('express-session');
var passport = require('passport');
var mongoose = require('mongoose');
var cors = require ('cors');
// var FacebookStrategy = require('passport-facebook').Strategy;
var keys = require('../kalanto');
var customer = require('../customer/customer.js');

var app = express();
app.use(session({secret: keys.secretKey}));
// app.use(passport.initialize());
// app.use(passport.session());
app.use(bodyParser.json());
//
// mongoose.set('debug', true);
// mongoose.connect('mongodb://localhost:3000/customer');

// app.post('/customer/add', function(req, res){
//    var customer = new Customer(req.body);
//    customer.save(function(err, status){
//       return err ? res.status(500).send(err) : res.send(status);
//    });
// });
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

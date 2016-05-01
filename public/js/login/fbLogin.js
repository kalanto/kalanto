passport.use(new FacebookStrategy({
   clientID: keys.facebookKey,
    clientSecret: keys.facebookSecret,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
},function(token, refreshToken, profile, done) {
   done(null, profile);
}));
passport.serializeUser(function(user, done) {
   //go to mongo get _id for user, put that on session
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
   //get data off of session ( see serializeUser)
  done(null, obj);
  //put it on req.user in EVERY ENDPOINT
});
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
   successRedirect: '/me',
   failureRedirect: '/'
}));
app.get('/me', function(req, res){
   res.send(req.user);
});

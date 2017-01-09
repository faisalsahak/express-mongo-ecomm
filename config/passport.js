var passport = require('passport');
var user = require('../models/Users')
var localStrategy = require('passport-local').Strategy

passport.serialize(function(user, done){
  done(err, user.id);
});

passport.deserialize(function(id, done){
  user.findById(id, function(err, user){
    done(err, user)
  })
})

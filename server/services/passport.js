const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require("../config/keys");

const User = mongoose.model('users');

// adds intermediate step to serialized token(based on user.id - mongodb id) 
// to user browser on login/signup
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.clientID.google,
      clientSecret: keys.clientSecret.google,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            done(null, existingUser);
          } else {
            new User({ googleId: profile.id }).save()
              .then(newUser => done(null, newUser));
          }
        });
    }
  )
);

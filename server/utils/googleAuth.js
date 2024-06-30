const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:5000/api/auth/google/callback',
      },
      async function (accessToken, refreshToken, profile, done) {
        try {
          let user = await User.findByEmail(profile.emails[0].value);

          if (!user) {
            user = await User.create(profile.displayName, profile.emails[0].value, profile.id, profile.photos[0].value);
          }

          return done(null, user);
        } catch (error) {
          console.error('Error during Google OAuth authentication:', error);
          return done(error);
        }
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(async function (id, done) {
    const user = await User.findById(id);
    done(null, user);
  });
};

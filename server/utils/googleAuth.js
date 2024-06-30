const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel'); // Replace with your actual user model

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:5000/api/auth/google/callback', // Adjust based on your route setup
      },
      async function (accessToken, refreshToken, profile, done) {
        try {
          // Check if the user already exists in your database
          let user = await User.findByEmail(profile.emails[0].value);

          if (!user) {
            // Create a new user if they don't exist
            user = await User.create(profile.displayName, profile.emails[0].value, profile.id, profile.photos[0].value);
          }

          // Return user data to Passport
          return done(null, user);
        } catch (error) {
          console.error('Error during Google OAuth authentication:', error);
          return done(error);
        }
      }
    )
  );

  // Serialize user into session
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // Deserialize user from session
  passport.deserializeUser(async function (id, done) {
    const user = await User.findById(id);
    done(null, user);
  });
};

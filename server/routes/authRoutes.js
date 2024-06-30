const express = require('express');
const passport = require('passport');
const router = express.Router();

// Google OAuth2 callback route
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect or respond as needed
    res.redirect('/'); // Redirect to homepage after successful login
  }
);

// Example logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/'); // Redirect to homepage after logout
});

module.exports = router;

//External imports
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

//Internal Imports
const app = express();

//https://console.developers.google.com
 
//Passport autentication
passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, () => {
        console.log(acessToken);
    })
);

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

//server connect
const PORT = process.env.PORT || 3000;
app.listen(PORT);
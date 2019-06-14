const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const user = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    user.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    user.findOne({googleId: profile.id}).then(existingUser => {
        if(existingUser) {
            //Existe um usuário associado com esse ID do google
            done(null, existingUser);
        } else {
            //Não existe usuário associado a esse ID do google
            new user({
                googleId: profile.id
            }).save().then(user => done(null, user));
        }
    });  
})
);
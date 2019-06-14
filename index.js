//external imports
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

//internal imports
const app = express();

//connect in database
mongoose.connect(keys.mongoURI);
mongoose.connection.on('error', console.error.bind(console, 'Connection error!'));
mongoose.connection.once('open', () => {
    console.log('Connected to database!');
});

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

//server connect
const PORT = process.env.PORT || 4000;
app.listen(PORT);
//external imports
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
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

//passport initilize
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//server connect
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server run in port: ${PORT}`);
});
//External imports
const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const keys = require('./config/keys');

//Connect in Database
mongoose.connect(keys.mongoURI);
mongoose.connection.on('error', console.error.bind(console, 'Connection error!'));
mongoose.connection.once('open', () => {
    console.log('Connected to database!');
});

//Internal Imports
const app = express();

require('./routes/authRoutes')(app);

//server connect
const PORT = process.env.PORT || 3000;
app.listen(PORT);
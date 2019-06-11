//external imports
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');




//connect in database
mongoose.connect(keys.mongoURI);
mongoose.connection.on('error', console.error.bind(console, 'Connection error!'));
mongoose.connection.once('open', () => {
    console.log('Connected to database!');
});

//internal imports
const app = express();

require('./routes/authRoutes')(app);

//server connect
const PORT = process.env.PORT || 3000;
app.listen(PORT);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema({
    googleId: String,
    nome: String,
    email: [ {
        value: String,
        validated: Boolean
    } ]
});

mongoose.model('users', userSchema);


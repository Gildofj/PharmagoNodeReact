const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema({
    googleId: String,
    nome: String,
    given_name: String,
    family_name: String,
    foto: String,
    email: String,
    email_verified: {
        type: Boolean,
        value: false
    },
    local: String
});

mongoose.model('users', userSchema);


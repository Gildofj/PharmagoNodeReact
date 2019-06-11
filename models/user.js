const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema({
    googleId: String,
    nome: String,
    primeiro_nome: String,
    ultimo_nome: String,
    foto: String,
    email: String,
    email_verified: {
        type: Boolean,
        value: false
    },
    local: String
});

mongoose.model('users', userSchema);


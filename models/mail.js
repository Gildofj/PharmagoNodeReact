const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./user')

mailSchema = new Schema({
    assunto: String,
    remetente: [user.email],
    corpoEmail: String,
    _user: {type: Schema.Types.ObjectId, ref: 'user'},
    dataSent: Date
})
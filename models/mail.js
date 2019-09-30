const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const recipientSchema = require('./recipients');

mailSchema = new Schema({
    assunto: String,
    remetente: [recipientSchema],
    corpoEmail: String,
    _user: {type: Schema.Types.ObjectId, ref: 'user'},
    dataSent: Date
})
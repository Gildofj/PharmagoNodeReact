const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const remetenteSchema = require('./remetentes');

mailSchema = new Schema({
    assunto: String,
    remetente: [remetenteSchema],
    corpoEmail: String,
    _user: {type: Schema.Types.ObjectId, ref: 'user'},
    dataSent: Date
})

mongoose.model('mail', mailSchema);
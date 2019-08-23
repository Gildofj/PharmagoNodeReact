const mongoose = require('mongoose');
const Schema = mongoose.Schema;

drugsSchema = new Schema({
    nome: String,
    preco: String,
    descricao: String
});

mongoose.model('drugs', drugsSchema);
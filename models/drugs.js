const mongoose = require('mongoose');
const Schema = mongoose.Schema;

drugsSchema = new Schema({
    tituloDrug: String,
    preco: String,
    descricao: String,
    imagem: String
});

mongoose.model('drugs', drugsSchema);
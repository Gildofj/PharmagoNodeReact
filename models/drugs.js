const mongoose = require('mongoose');
const Schema = mongoose.Schema;

drugsSchema = new Schema({
    tituloDrugs: String,
    preco: String,
    descricao: String,
    compra: {type: Number, default: 0}
});

mongoose.model('drugs', drugsSchema);
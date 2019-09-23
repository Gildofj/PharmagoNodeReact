const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const drugsSchema = require('./drugs')

compraSchema = new Schema({
    drug: [ drugsSchema ],
    _user: {type: Schema.Types.ObjectId, ref: 'user'},
    dataCompra: Date
});

module.exports = compraSchema;
const mongoose = require('mongoose');

const drugs = mongoose.model('drugs')

module.exports = app => {
    app.get('/drugs', (drugs, done) => {
        drugs.find({}).then(drugs => {
            done(null, drugs.nome);
        })
    })
}
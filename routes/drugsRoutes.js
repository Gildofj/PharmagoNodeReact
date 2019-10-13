const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Drugs = mongoose.model('drugs')

module.exports = app => {
    app.get('/api/drugs', requireLogin, async (req, res) => {
        const drugs = await Drugs.find({})

        res.send(drugs);
    });
}
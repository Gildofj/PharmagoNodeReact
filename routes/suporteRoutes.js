const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Mailer = require('../services/Mailers');
const suporteTemplate = require('../services/emailTemplates/suporteTemplate');

const Mail = mongoose.model('mail');

module.exports = app => {
    app.post('/api/suporte', requireLogin, (req, res) => {
        const {assunto, remetente, corpoEmail} = req.body;
        
        const mail = new Mail({
            assunto,
            remetente,
            corpoEmail,
            _user: req.user.id,
            dataSent: Date.now()
        });

        const mailer = new Mailer(mail, suporteTemplate(mail));
    });
};




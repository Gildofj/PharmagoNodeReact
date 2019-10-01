const mongoose = require('mongoose');
//const requireLogin = require('../middlewares/requireLogin');
const Mailer = require('../services/Mailers');
const suporteTemplate = require('../services/emailTemplates/suporteTemplate');

const Mail = mongoose.model('mail');

module.exports = app => {
    app.post('/api/suporte', (req, res) => {
        const {assunto, remetente, corpoEmail} = req.corpoEmail;
        
        const mail = new Mail({
            assunto,
            remetente: remetente.split(',').map(email => ({ email: email.trim() })),
            corpoEmail,
            _user: req.user.id,
            dataSent: Date.now()
        });

        const mailer = new Mailer(mail, suporteTemplate(mail));
    });
};




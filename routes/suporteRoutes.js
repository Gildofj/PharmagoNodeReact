const mongoose = require('mongoose');
//const requireLogin = require('../middlewares/requireLogin');
const Mailer = require('../services/Mailers');
const suporteTemplate = require('../services/emailTemplates/suporteTemplate');

const Mail = mongoose.model('mail');

module.exports = app => {
    app.get('api/suporte/sucesso', (req, res) => {
        res.send('E-mail enviado com sucesso!')
    })

    app.post('/api/suporte', async (req, res) => {
        const {titulo, subject, body, remetentes} = req.body;
        
        const mail = new Mail({
            titulo,
            subject,
            body: body,
            remetentes: remetentes.split(',').map(email => ({email: email.trim()})),
            _user: req.user.id,
            dataSent: Date.now()
        });

        const mailer = new Mailer(mail, suporteTemplate(mail));

        try{
            await mailer.send();
            await mail.save();

            res.redirect('/api/suporte/sucesso');
        } catch (err) {
            res.status(422).send(err)
        }
    });
};




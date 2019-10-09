const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({subject, remetentes}, content){
        super();

        this.sgAPI = sendgrid(keys.sendGridKey);
        this.from_email = new helper.Email('suporte@pharmago.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.remetentes = this.formatAddresses(remetentes);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRemetente();
    }

    formatAddresses(remetentes){
        return remetentes.map(({ email }) => {
            return new helper.Email(email);
        });
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRemetente() {
        const personalize = new helper.Personalization();

        this.remetentes.forEach(remetente => {
            personalize.addTo(remetente);
        });
        this.addPersonalization(personalize);
    }

    async send() {
        const request = this.sgAPI.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });
        
        const response = this.sgAPI.API(request);
        return response;
    }
}

module.exports = Mailer;
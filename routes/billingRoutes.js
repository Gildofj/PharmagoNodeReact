const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const billing = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: 'Efetue seu pagamento aqui!',
            source: req.body.id
        });

        console.log(billing);
        res.redirect('/api/compra')
    });

    app.post('/api/compra', requireLogin, (req, res) => {
        const { drug } = req.body;

        const compra = new compra({
            drug: drug.split(',').map(tituloDrugs => ({ tituloDrugs: tituloDrugs.trim() })),
            _user: req.user.id,
            dataCompra: Date.now()
        });
    });
};


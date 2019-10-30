const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const billing = await stripe.charges.create({
            amount: 500,
            currency: 'BRL',
            description: 'Efetue seu pagamento aqui!',
            source: req.body.id
        });

        console.log(billing);
    });
};


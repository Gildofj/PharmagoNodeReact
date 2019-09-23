const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', 
passport.authenticate('google'),
(req, res) => {
    res.redirect('/');
}
);

app.get('/api/logout', (req, res, next) => {
    req.logout();
    res.redirect('/login');
    next.send(req.user);
})

app.get('/api/current_user', (req, res) => {
    res.send(req.user);
});
};
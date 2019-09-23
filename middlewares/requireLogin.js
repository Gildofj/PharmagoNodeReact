module.exports = (req, res, next) => {
    if(!req.user){
        return res.redirect('/api/logout').status(401).send({error: 'Efetue o Login para prosseguir!'});
    }
    next();
};
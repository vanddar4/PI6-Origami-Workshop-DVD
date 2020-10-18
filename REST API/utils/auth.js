const jwt = require('./jwt');
const config = require('../config/config');
const models = require('../models');

module.exports = (redirectAuthenticated = true) => {

    return function (req, res, next) {
        const token = req.cookies[config.authCookieName] || '';
        console.log(token);
        Promise.all([
            jwt.verifyToken(token),
            models.TokenBlacklist.findOne({ token })
        ])
            .then(([data, blacklistToken]) => {
                console.log(data);
                //console.log(blacklistToken);
                if (blacklistToken) { 
                    console.log(data);
                    console.log(blacklistToken);
                    
                    return Promise.reject(new Error('blacklisted token')) 
                }
                console.log(data);
                models.User.findById(data.id)
                    .then((user) => {
                        req.user = user;
                        next();
                    });
            })
            .catch(err => {
                if (!redirectAuthenticated) { next(); return; }
                console.log(err);
                
                if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                    res.status(401).send(err.message);
                    return;
                }

                next(err);
            })
    }

};
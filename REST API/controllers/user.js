const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');
const jwt = require('../utils/jwt');
const { Promise } = require('mongoose');

module.exports = {
    get: (req, res, next) => {
        models.User.find()
            .then((users) => res.send(users))
            .catch(next)
    },

    getInfo: (req, res, next) => {
        console.log("getting one!");
        let {id} = req.params;
        console.log(id,typeof(id));
        if(id == undefined||id == "undefined"){
            const token = req.cookies[config.authCookieName] || '';
            jwt.verifyToken(token).then(tokenData=>{
                console.log(tokenData)
                id = tokenData.id;
                models.User.findById(id)
                .then((user) => res.send(user))
                .catch(next);
            }).catch(next)
            
        }else{
            console.log(id);
            models.User.findById(id)
                .then((user) => res.send(user))
                .catch(next);
        }
       
    },

    post: {
        register: (req, res, next) => {
            const { username, password } = req.body;
            console.log(req.body)
            console.log(username,password);
            //if(password==rePassword){
                models.User.create({ username, password })
                .then((createdUser) => res.send(createdUser))
                .catch(next)
            // }else{
            //     res.status(401).send('password and respeted password doesnt match');
            // }
            
        },

        login: (req, res, next) => {
            const { username, password } = req.body;
            console.log( req.body);
            models.User.findOne({ username })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }
                    //console.log(user._id);
                    const token = utils.jwt.createToken({ id: user._id });
                    res.cookie(config.authCookieName, token).send(user);
                    
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log(req.cookie);
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { username, password } = req.body;
        models.User.update({ _id: id }, { username, password })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};
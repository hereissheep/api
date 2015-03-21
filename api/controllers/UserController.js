'use strict';

/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var passport = require('passport');

module.exports = {

    login: function (req, res) {
        passport.authenticate('local', function (err, user, info) {

            req.logIn(user, function (err) {
                if (err) {
                    return res.json("There was a problem with your authentication");
                }

                return res.json(user);
            });
        })(req, res);
    },

    logout: function (req, res) {
        req.logout();
        res.send("Successfully logged out");
    }


};


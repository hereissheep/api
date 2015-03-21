'use strict';

/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    schema: true,

    attributes: {
        firstName: {
            type: 'string',
            required: true
        },
        lastName: {
            type: 'string',
            required: true
        },
        email: {
            type: 'email',
            unique: true,
            required: true
        },
        password: {
            type: 'string',
            minLength: 6,
            required: true

        },
        provider: {
            type: 'string',
            required: false
        },
        provider_id: {
            type: 'string',
            required: false
        },
        products: {
            collection: "product",
            via: "user"
        }
    },

    beforeCreate: function (attrs, next) {
        var bcrypt = require('bcrypt');

        bcrypt.genSalt(12, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(attrs.password, salt, function (err, hash) {
                if (err) return next(err);

                attrs.password = hash;
                next();
            });
        });
    }

};

/**
 * Category model
 */

module.exports = {

    schema: true,

    attributes: {
        name: {
            type: 'string',
            required: true
        },
        products: {
            collection: 'product',
            via: 'category'
        }
    }
};


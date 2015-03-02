/**
 * Product model
 */

module.exports = {

    schema: true,

    attributes: {
        name: {
            type: 'string',
            required: true
        },
        price: {
            type: 'float',
            required: true
        },
        category: {
            model: 'category',
            required: true
        }
    }
};


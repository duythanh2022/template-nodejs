const Joi = require('joi');

const createProduct = {
    body:Joi.object().keys({
        name:Joi.string().required(),
        brand:Joi.string().required(),
        price:Joi.number().required()
    })
}
module.exports = {
    createProduct
}
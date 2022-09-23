const httpStatus = require("http-status")
const ApiError = require('../utils/ApiError')
const { Product } = require('../models')


const createProduct = async(productBody)=>{
    if(await Product.isExitedProduct(productBody.name)){
        throw new ApiError(httpStatus.BAD_REQUEST,"product already exists")
    }
    return Product.create(productBody)
}
module.exports = {
    createProduct
}
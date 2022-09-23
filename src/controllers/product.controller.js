const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync')
const { productService } = require('../services')
const createProduct = catchAsync(async(req, res)=>{
    const newProduct = await productService.createProduct(req.body);
    console.log("data",newProduct)
    res.status(httpStatus.CREATED).send(newProduct)
})
module.exports = {
    createProduct
}


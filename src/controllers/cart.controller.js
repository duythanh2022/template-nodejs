const {cartService} = require('../services')
const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');


const addToCart = catchAsync(async(req,res)=>{
    const newCart = await cartService.addToCart({
        userId:req.body._id,
        productId:req.body_id,
        quantity:req.body
    })
    res.status(httpStatus.CREATED).send(newCart);

})
module.exports = {
    addToCart
}
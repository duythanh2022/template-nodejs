const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { cartService } = require('../services');

const addToCart = catchAsync(async (req, res) => {
  const { productId, quantity, userId } = req.body;
  const newCart = await cartService.addToCart(productId, quantity, userId);
  res.status(httpStatus.CREATED).send(newCart);
});
module.exports = {
  addToCart,
};

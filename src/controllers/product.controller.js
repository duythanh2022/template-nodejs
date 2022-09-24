const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');

const createProduct = catchAsync(async (req, res) => {
  const newProduct = await productService.createProduct(req.body);
  res.status(httpStatus.CREATED).send(newProduct);
});
const getAllProduct = catchAsync(async (req, res) => {
  const product = await productService.getAllProduct();
  res.send(product);
});
const deleteProduct = catchAsync(async (req, res) => {
  const product = await productService.deleteProduct(req.params.productId);
  res.status(httpStatus.NO_CONTENT).send(product);
});
const updateProduct = catchAsync(async (req, res) => {
  const product = await productService.updateProduct(req.params.productId, req.body);
  res.send(product);
});
module.exports = {
  createProduct,
  getAllProduct,
  deleteProduct,
  updateProduct,
};

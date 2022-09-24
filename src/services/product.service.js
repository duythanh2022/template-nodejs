const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Product } = require('../models');

const createProduct = async (productBody) => {
  if (await Product.isExitedProduct(productBody.name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'product already exists');
  }
  return Product.create(productBody);
};
const getAllProduct = async () => {
  const product = await Product.find();
  return product;
};
const getProductById = async (id) => {
  const product = await Product.findById(id);
  return product;
};
const deleteProduct = async (productId) => {
  const product = await getProductById(productId);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  await product.remove();
  return product;
};
const updateProduct = async (productId, bodyProduct) => {
  const product = await Product.findByIdAndUpdate(productId, bodyProduct);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  return product;
};
module.exports = {
  createProduct,
  getAllProduct,
  deleteProduct,
  updateProduct,
};

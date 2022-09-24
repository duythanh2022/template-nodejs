const express = require('express');
const productController = require('../../controllers/product.controller');

const router = express.Router();

router.route('/').post(productController.createProduct).get(productController.getAllProduct);

router.route('/:productId').delete(productController.deleteProduct).patch(productController.updateProduct);

module.exports = router;

const express = require('express');
const validate = require('../../validations')
const productController  = require("../../controllers/product.controller")
const auth = require('../middlewares/auth');

const router = express.Router();

router
.route("/")
.post(productController.createProduct)
module.exports = router
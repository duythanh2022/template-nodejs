const express = require('express');
const {cartController} = require('../../controllers')
const router = express.Router();

router
.route("/")
.post(cartController.addToCart)

module.exports = router
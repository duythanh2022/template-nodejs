const express = require('express');
const {inventoryController} = require('../../controllers')
const router = express.Router();

router
.route("/")
.post(inventoryController.addInventory)

router
.route("/:id")
.get(inventoryController.getAllInventory)
.patch(inventoryController.editInventoryById)
module.exports = router
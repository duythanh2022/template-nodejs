const express = require('express');
const { inventoryController } = require('../../controllers');

const router = express.Router();

router.route('/').put(inventoryController.addInventory).get(inventoryController.getAllInventory);

router.route('/:id').get(inventoryController.getInventoryById).patch(inventoryController.editInventoryById);
module.exports = router;

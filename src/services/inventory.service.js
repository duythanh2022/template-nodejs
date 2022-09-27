const { Inventory } = require('../models');

const addInventory = async (inventoryBody) => {
  const inventory = await Inventory.create(inventoryBody);
  return inventory;
};
const editInventoryById = async (inventoryId) => {
  const inventory = await Inventory.findByIdAndUpdate(inventoryId).populate({
    path: 'productId',
    select: '-__v -_id',
  });
  return inventory;
};
const getInventoryById = async (id) => {
  const inventory = await Inventory.findById(id).populate({
    path: 'productId',
    select: '-__v -_id',
  });
  return inventory;
};
const getAllInventory = async () => {
  const inventory = await Inventory.find();
  return inventory;
};
module.exports = {
  addInventory,
  getInventoryById,
  editInventoryById,
  getAllInventory,
};

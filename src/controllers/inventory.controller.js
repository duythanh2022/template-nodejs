const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { inventoryService } = require('../services');

const addInventory = catchAsync(async (req, res) => {
  const inventory = await inventoryService.addInventory(req.body);
  res.status(httpStatus.CREATED).send(inventory);
});
const getInventoryById = catchAsync(async (req, res) => {
  const inventory = await inventoryService.getInventoryById(req.params.id);
  res.send(inventory);
});
const editInventoryById = catchAsync(async (req, res) => {
  const inventory = await inventoryService.editInventoryById(req.params.id);
  res.send(inventory);
});
const getAllInventory = catchAsync(async (req, res) => {
  const inventory = await inventoryService.getAllInventory();
  res.send(inventory);
});
module.exports = {
  addInventory,
  getInventoryById,
  editInventoryById,
  getAllInventory,
};

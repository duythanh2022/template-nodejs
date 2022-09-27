const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const {inventoryService} = require("../services")

const addInventory = catchAsync(async(req,res)=>{
    const inventory = await inventoryService.addInventory(req.body)
    res.status(httpStatus.CREATED).send(inventory);

})
const getAllInventory = catchAsync(async(req,res)=>{
    const inventory = await inventoryService.getAllInventory(req.params.id)
    res.send(inventory);
 
})
const editInventoryById = catchAsync(async(req,res)=>{
    const inventory = await inventoryService.editInventoryById(req.params.id)
    res.send(inventory);
})
module.exports = {
    addInventory,
    getAllInventory,
    editInventoryById
}
const {Inventory} = require('../models')
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { response } = require('express');

const addInventory = async(inventoryBody)=>{
    const inventory = await Inventory.create(inventoryBody)
    return inventory
}
const editInventoryById = async(inventoryId)=>{
    const inventory = await Inventory.findByIdAndUpdate(inventoryId).populate({
        path:"productId",
        select:"-__v -_id"
    })
    return inventory
}
const getAllInventory = async(id)=>{
    const inventory = await Inventory.findById(id).populate({
        path:"productId",
        select:"-__v -_id"
    })
    return inventory
}
module.exports = {
    addInventory,
    getAllInventory,
    editInventoryById
}
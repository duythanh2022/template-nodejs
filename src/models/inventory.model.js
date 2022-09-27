const mongoose = require('mongoose');

const inventorySchema =  mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    items:{
        type:Array,
    },
    quantity:{
        type:Number,
        default:0,
    },
    create_at:{
        type:Date,
        default:Date.now()
    }
})
const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;
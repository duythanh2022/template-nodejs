const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    orderDate: { type: Date, default: Date.now },
    products: { type: Array, default: [] },
    address:{
        type:String
    }
})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
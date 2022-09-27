const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    products:{
        type:Array,
    },
    status:{
        type:String,
        default:"active"
    }
})

const Cart = mongoose.model('Cart',cartSchema);

module.exports = Cart;
const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  products: {
    type: Array,
  },
  quantity: {
    type: Number,
  },
  status: {
    type: String,
    default: 'active',
  },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

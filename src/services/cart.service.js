const { Cart } = require('../models');
const { Inventory } = require('../models');

const addToCart = async (productId, quantity) => {
  const stock = await Inventory.updateOne(
    {
      productId,
      quantity: { $gt: quantity },
    },
    {
      $inc: {
        quantity: -quantity,
      },
      $push: {
        items: {
          quantity,
          productId,
        },
      },
    }
  );
  if (stock.ok) {
    const newCart = await Cart.findOneAndUpdate(
      {
        productId,
      },
      {
        $push: {
          products: {
            productId,
            quantity,
          },
        },
      },
      {
        upsert: true,
        new: true,
      }
    );
    return newCart;
  }
};

module.exports = {
  addToCart,
};

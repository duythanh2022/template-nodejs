// const { Cart } = require('../models');
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
  return stock;
};
module.exports = {
  addToCart,
};

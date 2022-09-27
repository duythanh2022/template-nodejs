const {Cart} = require('../models')
const {Inventory} = require('../models')
const addToCart = async(productId,quantity,userId) =>{
    const stock = await Inventory.updateOne({   
        quantity:{
            $gt: quantity
        }
    },{
        $inc:{
            quantity: -quantity
        },
        $push:{
            items:{
                userId,
                quantity,
                productId
            }
        }
    })

    
}
module.exports = {
    addToCart
}
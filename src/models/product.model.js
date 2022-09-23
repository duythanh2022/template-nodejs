const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name:{
        type:String
    },
    brand:{
        type:String,

    },
    price:{
        type:Number
    }
})

productSchema.statics.isExitedProduct = async function (name,productId){
    const product = await this.findOne({
        name,
        _id:productId
    })
    return product
}
// check product by it
productSchema.statics.isExitedProductById = async function (productId){
    const product = await this.findOne({_id:productId})
    return product
}
const Product = mongoose.model('Product', productSchema);

module.exports = Product

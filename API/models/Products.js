const mongoose = require('mongoose')
const {Schema} = mongoose
const {ObjectId} = mongoose.Schema.Types

const productSchema = mongoose.Schema({

    category:{
        type: String,
        // required: true,
    },
    description: {
        type: String,
        // required: true,
    },
    image: {
        type: String,
        // required: true,
    },
    price: {
        type: String,
        // required: true,
    },
    title: {
        type: String,
        // required: true,
    },
    quantity:{
        type: String,
        // required: true,
    },
}, { timestamps: true })

const productModel = mongoose.model('Product', productSchema)

module.exports = productModel

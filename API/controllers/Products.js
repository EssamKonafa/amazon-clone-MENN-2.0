const productModel = require('../models/Products')

const addProduct = async (req, res) => {
    const { category, description, image, price, title } = req.body

    try {
        const newProduct = new productModel({
            category, description, image, price, title
        })

        await newProduct.save()
        res.status(201).json({ message: 'product added successfully', data: newProduct })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getProductById = async (req, res) => {
    const productId = req.params.id
    try {
        const requestedProduct = await productModel.findById(productId)
        res.status(200).json(requestedProduct)
    } catch (err) {
        res.status(500).json({ message: message.err })
    }
}

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await productModel.find()
        res.status(200).json(allProducts)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateProduct = async (req, res) => {
    const productId = req.params.id
    const { category, description, image, price, title } = req.body
    try {
        const editProduct = await productModel.findByIdAndUpdate(
            productId,
            { category, description, image, price, title },
            { new: true }
        )
        res.status(200).json(editProduct)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteProduct = async (req, res) => {
    const productId = req.params.id
    try {
        const eliminateProduct = await productModel.findByIdAndDelete(productId)
        if (!eliminateProduct) {
            return res.status(404).json({ message: 'product doest exist' })
        }
        res.status(200).json({ message: 'product deleted successfully' })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { addProduct, getProductById, getAllProducts, updateProduct, deleteProduct, }
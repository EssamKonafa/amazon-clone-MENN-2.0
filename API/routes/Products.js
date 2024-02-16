const express = require('express')
var router = express.Router()
const {addProduct, getProductById, getAllProducts, updateProduct, deleteProduct, }= require('../controllers/Products')

router.post('/addProduct', addProduct)
router.get('/getProductById/:id', getProductById)
router.get('/', getAllProducts)
router.patch('/updateProduct/:id', updateProduct)
router.delete('/deleteProduct/:id', deleteProduct)

module.exports= router
const express = require('express')
var router = express.Router()
const {addUser, getUser, getAllUsers, editUser, deleteUser, login } = require('../controllers/User')
const {auth} = require('../middleWare/auth')

router.post('/addUser', addUser)
router.get('/:id', getUser)
router.get('/', getAllUsers)
router.patch('/editUser/:id', auth, editUser)
router.delete('/deleteUser/:id', deleteUser)
router.post('/login', login)

module.exports= router
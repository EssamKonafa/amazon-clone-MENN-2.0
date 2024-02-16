const userModel = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Token = require('../models/Token')
const crypto = require('crypto')

const addUser = async (req, res) => {
    const user = req.body

    try {
        const newUser = await userModel.create(user)
        const token = await new Token ({
            userId: newUser.id,
            token: crypto.randomBytes(32).toString('hex')
        }).save()
        // await newUser.save()
        res.status(200).json({ message: 'new user added', user: newUser })
    } catch (err) {
        console.error('Error in login:', err); 
        res.status(500).json({ message: err.message })
    }
}

const getUser = async (req, res) => {
    const getUserId = req.params.id
    try {
        theUser = await userModel.findOne({_id:getUserId})
        res.status(200).json({ message: "the user u want", user: theUser })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const theUsers = await userModel.find()
        res.status(200).json({ message: 'the all users r here for u sir', users: theUsers })
    } catch (err) {
        res.status(err).json({ message: err.message })
    }
}

const editUser = async (req, res) => {
    const userId = await req.params.id
    const { name, email, password, phoneNumber } = req.body
    try {
        const patchingUser = await userModel.findByIdAndUpdate(
            userId,
            { name, email, password, phoneNumber },
            { new: true }
        )
        res.status(200).json({ message: "user updated successfully", user: patchingUser })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteUser = async (req, res) => {
    const userId = await req.params.id
    try {
        const deletingUser = await userModel.findByIdAndDelete(userId)
        res.status(200).json({ message: 'user deleted successfully', theDeletedUser: deletingUser })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).json({ message: "the user must enter his email and password" })
    }
    try {
        const user = await userModel.findOne({ email: email })
        if (!user) {
            res.status(404).json({ message: "invalid email or password" })
        }
        const valid = await bcrypt.compare(password, user.password)
        if (!valid) {
            res.status(401).json({ message: 'invalid password' })
        }
        // console.log('Secret key:', process.env.SECRET);
        const token = jwt.sign({ id: user.id, name: user.name }, process.env.SECRET)
        res.status(200).json({message: "logged successfully", id: user.id, token: token })
    } catch (err) {
        console.error('Error in login:', err); 
        res.status(500).json({ message: err.message })
    }
}

module.exports = { addUser, getUser, getAllUsers, editUser, deleteUser, login, }
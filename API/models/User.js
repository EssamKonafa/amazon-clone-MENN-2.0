const mongoose = require('mongoose')
const {Schema} = mongoose
const {ObjectId} = mongoose.Schema.Types
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        // required: true,
        unique:true,
    },
    email:{
        type: String,
        unique:true,
        // required: true,
    },
    password:{
        type: String,
        unique:true,
        // required: true,
    },
    phoneNumber:{
        type: String,
        unique:true,
        // required: true,
    },
    location:{
        type: String,
        // required: true,
    },
    

}, { timestamps: true })

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword
    next()
})

const userModel = mongoose.model('User', userSchema)
module.exports = userModel
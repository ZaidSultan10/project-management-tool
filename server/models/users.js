const mongoose = require('mongoose')
const moment = require('moment')

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    email:String,
    isActive:Boolean,
    apiKey:String,
    secretKey:String,
    firstName:String,
    lastName:String,
    profilePicture:String,
    createdAt: {
        type: Date,
        default: moment().format('YYYY-MMM-DD HH:mm:ss')
    },
    updatedAt: {
        type: Date,
        default: moment().format('YYYY-MMM-DD HH:mm:ss')
    }
})

const User = mongoose.model('user',userSchema)

module.exports = User
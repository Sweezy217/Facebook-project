const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName:String,
    surname:String,
    uniqueID:String,
    password:String,
    dayOfBirth:Number,
    monthOfBirth:String,
    yearOfBirth:Number,
    gender:String
})

const UserModel = mongoose.model("facebook-users", UserSchema)
module.exports = UserModel
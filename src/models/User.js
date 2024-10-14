const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    age:{type:Number},
    password:{type:String},
    gender:{type:String,enum:["Male","Female"]},
    email:{type:String}
})

const UserModel = mongoose.model("User",userSchema);

module.exports = UserModel;
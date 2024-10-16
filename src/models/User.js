const mongoose = require("mongoose");
const validator = require("validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required:[true,"First name is required and must atleast 4 character long."],
        minLength:[4,"FIrst name must be atleast 4 character long."],
        maxLenght:[50,"firstName must not exceed 50 character."]
    },
    lastName: {
        type: String,
        minLength:4,
        maxLenght:50
    },
    age: {
        type: Number
    },
    password: {
        type: String,
        required:true
    },
    gender: {
        type: String,
        enum: ["Male", "Female","Other"]
    },
    email: {
        type: String,
        unique:true,
        required:[true,"Email is required"],
        lowercase:[true,"email must be in lowercase"],
        trim:true,
       validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("Email is not valid")
            }
       }
    },
    photoURL:{
        type:String,
        validate(value){
            if (!validator.isURL(value)) {
                throw new Error("URL is not valid")
            }
        },
        default:"http://google.com"
    },
    skill:{
        type:[String]
    },
    about:{
        type:String,
        minLength:10,
        maxLenght:160,
        default:"This is default message"
    }
})


userSchema.methods.validatePassword = async function (userPassword) {  
   return isPasswordValid = await bcrypt.compare(userPassword,this.password)
}

userSchema.methods.generateToken = async function () {
    const token = await jwt.sign({userId:this._id},process.env.JWT_SECRETE_KEY,{expiresIn:"1d"})
    return token;
}

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
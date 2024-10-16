const UserModel = require("../models/User");
const CustomError = require("../utils/customError");
const bcrypt = require("bcrypt");
const signIn = async(req,res,next)=>{
    try {
        const {firstName,lastName,email,password,age,gender}=req.body;
        
        const useExist = await UserModel.findOne({email});

        if (useExist) {
            throw new CustomError("User already exist",400);
        }

        //hash the password
        const hashPassword = await bcrypt.hash(password,10);

        const user =  new UserModel({
            firstName,
            lastName,
            email,
            password:hashPassword,
            age,
            gender
        });

        await user.save();
        return res.status(res.statusCode).json({
            status:true,
            code:res.statusCode,
            message:"user added successfully"
        })

    } catch (error) {
        console.log("error while sign in",error);
        next(error)
    
    }
}

const login = async(req,res,next)=>{
try {
    const {email,password}=req.body;

    const userExist = await UserModel.findOne({email});

    if (!userExist) {
        throw new CustomError("User not found",404);
    }

    //check password valid
    const isPasswordValid = await userExist.validatePassword(password);
    if (!isPasswordValid) {
        throw new CustomError("Password mismatch",409);
    }

    // generate JWT token;
    const token = await userExist.generateToken();

    //add token to cookie
    res.cookie("token",token);
    

    res.status(200).json({success:true,message:"Logged in successful."})

} catch (error) {
    console.log("Error encountered while login into system",error);
    next(error)
}
}

const profileInfo = async(req,res,next)=>{
    try {
        const {user}=req.body;
        if (!user) {
            throw new CustomError("Session expired or token not found",409)
        }
        res.status(200).json({success:true,message:"User information fetched successfully.",data:user});
    } catch (error) {
        console.log("error encountered while getting profile");
        next(error)
    }
}

const userController ={
    signIn,
    login,
    profileInfo
}

module.exports =  userController
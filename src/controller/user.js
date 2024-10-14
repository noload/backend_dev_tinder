const UserModel = require("../models/User");

const signIn = async(req,res)=>{
    try {
        const {firstName,lastName,email,password,age,gender}=req.body;

        const user =  new UserModel({
            firstName,
            lastName,
            email,
            password,
            age,
            gender
        });

        await user.save();
        return res.json({
            message:"user added successfully"
        })

    } catch (error) {
        console.log("error while sign in");
    }
}

const userController ={
    signIn
}

module.exports =  userController
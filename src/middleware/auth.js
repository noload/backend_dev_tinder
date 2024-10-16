const UserModel = require("../models/User");
const CustomError = require("../utils/customError")
const jwt = require("jsonwebtoken");
const dot = require("dotenv")
dot.config();
const authUser = async (req, res, next) => {
    try {
        const {
            token
        } = req.cookies;


        if (!token) {
            throw new CustomError("Token not found try login again", 404)
        }

        //validate token
        const decode = await jwt.verify(token, process.env.JWT_SECRETE_KEY);

        const {
            userId
        } = decode;

        const user = await UserModel.findById(userId);

        if (!user) {
            throw new CustomError("User not found");
        }
        req.user = user;
        next();


    } catch (error) {
        console.log("error encountered in auth middleware", error);
        next(error)
    }
}

module.exports = authUser
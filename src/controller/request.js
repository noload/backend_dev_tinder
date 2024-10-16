const ConnectionRequestModel = require("../models/ConnectionRequest");

const sentRequest=async(req,res,next)=>{
    try {
        const fromUser = req.user;
        const {toUserId,status}=req.params;
        
        const connection = new ConnectionRequestModel({
            fromUserId:fromUser._id,
            toUserId:toUserId,
            status:status
        })
        
        await connection.save()

        return res.status(200).json({
            success:true,
            message:"Connectionn request sent successfully",
            data:connection
        })
    } catch (error) {
        console.log("error encountered while sending request",error);
        next(error)
    }
}

const RequestController ={
    sentRequest   
}

module.exports = RequestController;
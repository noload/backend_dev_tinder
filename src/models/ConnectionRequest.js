const mongoose = require("mongoose");


const ConnectionSchema = mongoose.Schema({
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "FromUserId is required"],
        ref: "User"
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "toUserId is required"],
        ref: "User"
    },
    status: {
        type: String,
        enum: {
            values: ["Interested","Ignored", "Accepted", "Rejected"],
            message: `{VALUE} is not supported`
        },
        required: [true, "Status is required."]
    }

}, {
    timestamps: true
})


const ConnectionRequestModel = mongoose.model("Connection", ConnectionSchema)

module.exports = ConnectionRequestModel;
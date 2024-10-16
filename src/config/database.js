const mongoo = require("mongoose")
const env = require("dotenv")
env.config();

const connectDB = async()=>{
    await mongoo.connect(process.env.MongoURI)
}

module.exports = connectDB;
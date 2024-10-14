const mongoo = require("mongoose")

const connectDB = async()=>{
    await mongoo.connect("mongodb+srv://notesafe:AFe0yYmkAWBsHsKQ@cluster0.fsxrugd.mongodb.net/DevTinder")
}

module.exports = connectDB;
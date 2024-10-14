const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const connectDB = require("./config/database")
const router = require("./route")
connectDB().then(()=>{
 console.log("connected to Database");
 app.listen(3000,()=>{
    console.log("Server is running successfully on port 3000");
});
}).catch(()=>{
    console.log("error while connected  to db");
})

app.use(bodyParser.json())

app.use("/api",router)

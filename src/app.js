const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const connectDB = require("./config/database")
const router = require("./route")
const env = require("dotenv")
const cookieParser = require("cookie-parser")
env.config();
connectDB().then(()=>{
 console.log("connected to Database");
 app.listen(3000,()=>{
    console.log("Server is running successfully on port 3000");
});
}).catch(()=>{
    console.log("error while connected  to db");
})

app.use(bodyParser.json())
app.use(cookieParser());
app.use("/api",router)



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ success:false,message: err.message });
});

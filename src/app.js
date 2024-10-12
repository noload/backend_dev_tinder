const express = require("express");
const app = express()

app.use("/",(req,res)=>{
 res.send("hello vaibhav")
})

app.listen(3000,()=>{
    console.log("Server is running successfully on port 3000");
});
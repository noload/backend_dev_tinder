const express = require("express");
const  userRoute = require("./user")
const router = express.Router();
const authRouter = require("./auth")
const connectionRouter = require("./request");

router.use("/user",userRoute)
router.use("/auth",authRouter)
router.use("/request",connectionRouter)
module.exports = router;
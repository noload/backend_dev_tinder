
const express = require("express")
const userController = require("../controller/user");
const authUser = require("../middleware/auth");
const router = express.Router();

router.post("/signin",userController.signIn)
router.post("/login",userController.login);
router.get("/profile",authUser,userController.profileInfo)

module.exports = router;
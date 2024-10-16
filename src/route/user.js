
const express = require("express")
const userController = require("../controller/user");
const authUser = require("../middleware/auth");
const router = express.Router();

router.get("/profile",authUser,userController.profileInfo)
router.patch("/edit-profile",authUser,userController.profileEdit)

module.exports = router;
const {Router} = require("express");
const RequestController = require("../controller/request");
const authUser = require("../middleware/auth");

const router = Router();;

router.post("/send/:status/:toUserId",authUser,RequestController.sentRequest)

module.exports = router;
const express = require("express");
const router = express.Router();
const userRouter = require("./user-routes");
const chatRoutes = require("./chat-routes");


router.use("/user", userRouter)
router.use("/chats", chatRoutes)


module.exports = router;
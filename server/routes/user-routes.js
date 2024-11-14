const express = require("express");
const { getAllUsers, signUp } = require("../controllers/user-controllers");
const {validate, signupValidator} = require("../utils/validators")
const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup",validate(signupValidator) ,signUp);

module.exports = userRouter;
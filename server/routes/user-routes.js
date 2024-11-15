const express = require("express");
const { getAllUsers, signUp, login } = require("../controllers/user-controllers");
const {validate, signupValidator, loginValidator} = require("../utils/validators")
const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup",validate(signupValidator) ,signUp);
userRouter.post('/login', validate(loginValidator), login)
module.exports = userRouter;
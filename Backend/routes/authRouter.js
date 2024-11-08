const express = require("express");
const authRouter = express.Router();
const { signUp, login, verify } = require("../controllers/authControllers");

authRouter.post("/signup", signUp);
authRouter.post("/login", login);
authRouter.post("/verify", verify);

module.exports = authRouter;

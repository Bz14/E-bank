const express = require("express");
const authRouter = express.Router();
const { signUp } = require("../controllers/authControllers");

authRouter.post("/signup", signUp);

module.exports = authRouter;

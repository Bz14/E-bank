const jwt = require("jsonwebtoken");

require("dotenv").config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

exports.generateAccessToken = (id) => {
  return jwt.sign(id, ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
};

exports.generateRefreshToken = (id) => {
  return jwt.sign(id, REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

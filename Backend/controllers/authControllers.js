const bycrypt = require("bcryptjs");
const User = require("../models/User");

require("dotenv").config();

exports.signUp = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }

  const salt = await bycrypt.genSalt(10);
  const hashedPassword = await bycrypt.hash(password, salt);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  newUser.save((err, user) => {
    if (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    return res.status(201).json({ message: "User created" });
  });
};

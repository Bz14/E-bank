const bycrypt = require("bcryptjs");
const User = require("../models/User");
const UnverifiedUser = require("../models/UnverifiedUser");
const validate = require("../utils/validator");
const sendEmail = require("../utils/verification_email");
const otpGenerator = require("otp-generator");

require("dotenv").config();

exports.signUp = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (!validate.validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }
  if (!validate.validatePassword(password)) {
    return res.status(400).json({
      message:
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number",
    });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }

  const existingUnverifiedUser = await UnverifiedUser.findOne({ email });
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  if (existingUnverifiedUser) {
    if (existingUnverifiedUser.verificationTokenExpiry > Date.now()) {
      existingUnverifiedUser.verificationToken = otp;
      existingUnverifiedUser.verificationTokenExpiry = Date.now() + 3600000;
      try {
        existingUnverifiedUser.save();
      } catch {
        return res.status(500).json({ message: "Internal Server Error" });
      } finally {
        let isSent = sendEmail(email, otp);
        if (!isSent) {
          return res.status(500).json({ message: "Internal Server Error" });
        }
        return res.status(200).json({ message: "Email sent successfully" });
      }
    }
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);
    const newUser = new UnverifiedUser({
      name,
      email,
      password: hashedPassword,
      otp: otp,
      otpExpiry: Date.now() + 3600000,
    });

    try {
      const savedUser = await newUser.save();
      console.log(savedUser);
    } catch {
      return res.status(500).json({ message: "Internal Server Error" });
    } finally {
      let isSent = sendEmail(email, otp);
      if (!isSent) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
      return res.status(200).json({ message: "Email sent successfully" });
    }
  }
};

exports.verify = async (req, res) => {
  const { otp, email } = req.body;
  if (!otp) {
    return res.status(400).json({ message: "OTP is required" });
  }
  try {
    const user = await UnverifiedUser.findOne({ email });
    if (!(user.otp === otp)) {
      return res.status(400).json({ message: "Invalid OTP" });
    } else if (user.otpExpiry < Date.now()) {
      return res.status(400).json({ message: "OTP expired" });
    }
  } catch {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  const newUser = new User({
    name: user.name,
    email: user.email,
    password: user.password,
    isVerified: true,
    otp: null,
    otpExpiry: null,
  });
  try {
    const savedUser = await newUser.save();
    const deletedUser = await UnverifiedUser.deleteOne({ email });

    if (!savedUser) {
      return res.status(500).json({ message: "Internal Server Error" });
    }

    if (!deletedUser) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
    console.log(savedUser, deletedUser);
    return res.status(200).json({ message: "User verified successfully" });
  } catch {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!validate.validateEmail(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  if (!validate.validatePassword(password)) {
    return res.status(400).json({
      message:
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      const unverifiedUser = await UnverifiedUser.findOne({ email });
      if (!unverifiedUser) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      return res.status(400).json({ message: "Verify your Email" });
    }

    if (!user.isVerified) {
      return res.status(400).json({ message: "Verify your Email" });
    }

    const validPassword = await bycrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
  } catch {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

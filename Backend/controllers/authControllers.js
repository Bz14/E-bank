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

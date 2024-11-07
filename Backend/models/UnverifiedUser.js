const mongoose = require("mongoose");

const unverifiedUserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    otp: { type: String },
    otpExpiry: { type: Date },
    googleId: { type: String, default: null },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UnverifiedUser", unverifiedUserSchema);

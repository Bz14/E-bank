const nodemailer = require("nodemailer");

require("dotenv").config();

const sendEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Verify your Email Address",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #2c3e50;">Welcome to Our Platform!</h2>
        <p>Hi there,</p>
        <p>Thanks for signing up. To get started, please verify your email address by entering the code below on the verification page:</p>
        <div style="margin: 20px 0; padding: 10px; border: 2px dashed #3498db; font-size: 1.5em; text-align: center; color: #3498db;">
          <strong>${token}</strong>
        </div>
        <p>If you didn't request this email, please ignore it.</p>
        <p>Thanks,</p>
        <p>The Team</p>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      return False;
    } else {
      console.log(info);
      return True;
    }
  });
};

module.exports = sendEmail;

const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "prompt.solution3@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

module.exports = transporter;

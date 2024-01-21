"use strict";
const nodemailer = require("nodemailer");

require("dotenv").config();
const senderEmail = process.env.sender_email;
const recieverEmail = process.env.reciever_email;
const password = process.env.password;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: senderEmail,
    pass: password,
  },
});

async function main(message) {
  const info = await transporter.sendMail({
    from: `"Website" <${senderEmail}>`,
    to: recieverEmail,
    subject: "New Message",
    text: message,
  });
  console.log(info.messageId);
}

module.exports = main;

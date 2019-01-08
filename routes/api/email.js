// include third party module
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Import Key file
const key = require("../../config/keys");

const smtpHost = key.smtpHost;
const emailUser = key.emailUser;
const emailPassword = key.emailPassword;

// import validation

const userEmailInput = require("../../validation/email");

// post to contact

router.post("/contact", (req, res) => {
  const { errors, isValid } = userEmailInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // get form values using req name,email and subject
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;

  let transporter = nodemailer.createTransport({
    host: smtpHost,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: emailUser, // generated ethereal user
      pass: emailPassword // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: "info@amarnath.xyz", // sender address
    to: "tsr.amarnath@gmail.com, info@amarnath.xyz", // list of receivers
    subject: `Contact Email from MERN Stack contact us form - ${name}`, // Subject line
    text: `From : ${name} Email: ${email} Subject : ${subject}` // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(400).json(error);
    }
    return res.status(200).json(info);
  });
});

module.exports = router;

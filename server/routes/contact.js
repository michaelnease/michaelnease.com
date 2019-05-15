var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
require("dotenv").config();

router.post("/", function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: `${process.env.SERVICE}`,
    auth: {
      user: `${process.env.USERNAME}`,
      pass: `${process.env.PASSWORD}`
    }
  });

  var mailOptions = {
    from: `${process.env.FROM} ✔ <${process.env.FROM_EMAIL}>`,
    to: `${process.env.TO}`,
    subject: "Contact form ✔",
    text: `
      ${req.body.name}
      ${req.body.email}
      ${req.body.message}
    `,
    html: `
      <p>Name: <b>${req.body.name}</b></p>
      <p>Email: <b>${req.body.email}</b></p>
      <p>Message: <b>${req.body.message}</b></p>
    `
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  transporter.close();
});

module.exports = router;

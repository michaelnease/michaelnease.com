var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");

router.post("/", function(req, res, next) {
  const { name, email, message } = req.body;

  var transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    secureConnection: true,
    port: 587,
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
      ${name}
      ${email}
      ${message}
    `,
    html: `
      <p>Name: <b>${name}</b></p>
      <p>Email: <b>${email}</b></p>
      <p>Message: <b>${message}</b></p>
    `
  };

  transporter.sendMail(mailOptions, function(error) {
    if (error) res.json({ error });
    else {
      res.json({ name, email, message });
    }
  });

  transporter.close();
});

module.exports = router;

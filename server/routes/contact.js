var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
/* Contact. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;

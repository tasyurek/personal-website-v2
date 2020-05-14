require("dotenv").config();
const express = require("express");
const router = express.Router();

const mailgun = require("mailgun-js")({
  apiKey: process.env.MAIL_GUN_API_KEY,
  domain: process.env.MAIL_GUN_DOMAIN,
});

router.post("/api/sendmail", (req, res) => {
  const output = `
  <div style="background-color: #10111f;color: #a7a8c9; padding: 32px">
    <h2 style="color: #a7a8c9;">You have a new messages</h2>
    <h3 style="margin-top: 32px; color: #a7a8c9;">Details</h3>
    <p style="color: #a7a8c9;">Name: ${req.query.name} </p>
    <p style="color: #a7a8c9;">Email: ${req.query.email} </p>
    <h3 style="margin-top: 32px; color: #a7a8c9;">Messages</h3>
    <p style="color: #a7a8c9;">${req.query.message}</p>
  </div>
  `;

  var data = {
    from: "Personal Website <me@samples.mailgun.org>",
    to: process.env.EMAIL,
    subject: "Hello",
    text: "You have a new message.",
    html: output,
  };

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      return console.log(error);
    }
    console.log(body);
  });

  res.send("Mail has been successfuly sent.");
});

module.exports = router;

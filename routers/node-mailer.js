require("dotenv").config();

const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

// router.use(express.json());
// router.use(express.urlencoded());
// router.use(express.multipart());

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.post("/api/nodemailer", (req, res) => {
  console.log(process.env.AUTH_CLIENT_ID);

  var auth = {
    type: "oauth2",
    user: process.env.EMAIL,
    clientId: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    refreshToken: process.env.AUTH_REFRESH_CODE,
  };

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: "onurcantasyurek@gmail.com",
    subject: "My site contact from: " + req.query.name,
    text: req.query.message,
    html:
      "Message from: " +
      req.query.name +
      "<br></br> Email: " +
      req.query.email +
      "<br></br> Message: " +
      req.query.message,
  };

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: auth,
  });

  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(JSON.stringify(res));
    }
  });

  res.send("it is working!");
});
module.exports = router;
// client_id: 623226578715-28asckub250065ijv3b64rksa968hpqq.apps.googleusercontent.com
// secret_key: Bj3vnL3vmi6eLCggW-UK6AT7
// auth_code: 4/zwEU_q9BIIEN8mqdnJJv6WuAAwLB9aIFHnW9UBajYHyPIcdMAwW57EmpV7v3Rd08ozjJhl5jTHpyitrrsFDxPVc
// refresh_code: 1//04_N8PBTCHJ2fCgYIARAAGAQSNwF-L9Ir3NFzon7bVqjAciJwrzugkFJ4pZcNC6RuAb9244H5QpFAzoRQ8Ym7NpXSy0vF8VXP0oo
// acccess_code: ya29.a0AfH6SMBoinwPUMlioYtmLuVhtkHQVepB1pNdg1oPg2kd7tGkyqyTsMHbcznqlv925V0Cq8qYm93AZaR4j1lKlGHyEB0o1IlhiyXFfAuk_IkR1uhvAMkQwH9GoZfa3ha0HMWVC9W1dkTj1COKk3CuCKL-NETDzpCt7VA

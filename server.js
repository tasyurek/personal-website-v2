const express = require("express");
const path = require("path");
const app = express();
const weatherRouter = require("./weather-app/weather-router");
const mailgunRouter = require("./routers/mailgun");
const enforce = require("express-sslify");

const port = process.env.PORT || 8080;
const publicPath = path.join(__dirname, "client", "build");

// app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(express.static(publicPath));
app.use(weatherRouter);
app.use(mailgunRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => console.log("server is runnig"));

// asd

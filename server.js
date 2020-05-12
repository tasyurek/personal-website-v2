const express = require("express");
const path = require("path");
const app = express();
const weatherRouter = require("./weather-app/weather-router");
const mailgunRouter = require("./routers/mailgun");

const port = process.env.PORT || 3000;

console.log(process.env.NODE_ENV);

const publicPath = path.join(__dirname, "client", "build");

app.use(express.static(publicPath));

app.use(weatherRouter);
app.use(mailgunRouter);

app.get("/api/test", (req, res) => {
  console.log("api/test");
  res.send("/api/test is working.");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => console.log("server is runnig"));

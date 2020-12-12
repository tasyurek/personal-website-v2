const express = require("express");
const path = require("path");
const app = express();
const weatherRouter = require("./weather-app/weather-router");
const mailgunRouter = require("./routers/mailgun");
const enforce = require("express-sslify");

const port = process.env.PORT || 8080;

const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync(__dirname + "/ssl/key.pem", "utf8"),
  cert: fs.readFileSync(__dirname + "/ssl/cert.pem", "utf8"),
};

const publicPath = path.join(__dirname, "client", "build");

// app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(express.static(publicPath));
app.use(weatherRouter);
app.use(mailgunRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

const server = https.createServer(options, app).listen(port);

server.on("clientError", (err, socket) => {
  console.error(err);
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
});

// app.listen(port, () => console.log("server is runnig"));

// asd

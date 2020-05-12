const request = require("request");
const chalk = require("chalk");
require("dotenv").config();

const forecast = (latitude, longitude, lang, units, callback) => {
  const url =
    process.env.DARK_SKY_URL +
    latitude +
    "," +
    longitude +
    "?units=" +
    units +
    "&lang=" +
    lang;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect services!", undefined);
    } else if (body.error) {
      callback(body, undefined);
    } else {
      console.log(
        chalk.green.bold("Successfuly connected to forecast services.")
      );

      const data = {
        forecast: body,
      };
      callback(undefined, data);
    }
  });
};

module.exports = forecast;

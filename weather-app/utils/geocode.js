const request = require("request");
const chalk = require("chalk");
require("dotenv").config();

const geocode = (address, callback) => {
  const url =
    process.env.GEOCODE_API_KEY +
    encodeURIComponent(address) +
    ".json?access_token=" +
    "pk.eyJ1Ijoib251cmNhbjEiLCJhIjoiY2s3N2p4bnRmMDZkdTNlbnllYjdrNHZzZiJ9.LGs0N0f84_ftRjqTebxURA&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect services!", undefined);
    } else if (body.message) {
      callback(body.message, undefined);
    } else if (!body.features.length) {
      callback("Unable to find location, try another search!");
    } else {
      console.log(
        chalk.green.bold("Successfuly connected to geocode services.")
      );
      const data = {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      };
      callback(undefined, data);
    }
  });
};

module.exports = geocode;

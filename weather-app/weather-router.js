const express = require("express");
const router = express.Router();
const path = require("path");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

router.get("/api/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address!",
    });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(
        latitude,
        longitude,
        req.query.lang,
        req.query.units,
        (error, data) => {
          if (error) {
            return res.send({ error });
          }

          res.send({
            location,
            address: req.query.address,
            forecast: data.forecast,
            icon: data.forecast.currently.icon,
            units: data.forecast.flags.units,
            temperature: data.forecast.currently.temperature,
            precipType: data.forecast.currently.precipType,
            precipProbability: data.forecast.currently.precipProbability,
            summary: data.forecast.currently.summary,
            humidity: data.forecast.currently.humidity,
            pressure: data.forecast.currently.pressure,
            windSpeed: data.forecast.currently.windSpeed,
            visibility: data.forecast.currently.visibility,
            uvIndex: data.forecast.currently.uvIndex,
            ozone: data.forecast.currently.ozone,
          });
        }
      );
    }
  );
});

module.exports = router;

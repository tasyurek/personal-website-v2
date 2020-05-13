import React from "react";
import { setForecast } from "../actions/forecast";
import { connect } from "react-redux";
import { getForecastIcon, getDayName } from "../selectors/forecast";

const DailyForecast = ({ data, dispatch }) => {
  let dailyForecastClass = "daily-forecast__container__item";
  const now = Date.now();
  const currentDate = new Date(now);
  const currentDay = currentDate.getDay();

  const dailyForecasts = data.map((forecast, index) => {
    const ForecastIcon = getForecastIcon[forecast.icon];
    if (currentDay === index) {
      dailyForecastClass = "daily-forecast__container__item active-day";
    } else {
      dailyForecastClass = "daily-forecast__container__item";
    }
    return (
      <div
        className={dailyForecastClass}
        onClick={() => dispatch(setForecast(forecast))}
      >
        <p>{getDayName[index]}</p>
        <div className="daily-forecast__container__item__temperature">
          <p>
            <ForecastIcon className="weather-icon weather-icon--hourly" />
          </p>
          <p>{forecast.temperatureHigh.toFixed(0)}°</p>
          <p>{forecast.temperatureLow.toFixed(0)}°</p>
        </div>
      </div>
    );
  });

  return (
    <div className="daily-forecast">
      <h4>Daily</h4>
      <div className="daily-forecast__container">{dailyForecasts}</div>
    </div>
  );
};

export default connect()(DailyForecast);

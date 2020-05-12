import React, { useState } from "react";
import { connect } from "react-redux";
import { getForecastIcon } from "../selectors/forecast";

const HourlyForecast = (props) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [classList, setClassList] = useState("hourly-forecast__container");

  const hourlyForecast = props.data.map((forecast) => {
    const date = new Date(forecast.time * 1000);

    const timeHour = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const temperature = forecast.temperature.toFixed(0);
    const ForecastIcon = getForecastIcon[forecast.icon];
    return (
      <div className="hourly-forecast__container__item box">
        <p>{timeHour}</p>
        <ForecastIcon className="weather-icon weather-icon--hourly" />
        <p>{temperature}°</p>
      </div>
    );
  });

  return (
    <div className="hourly-forecast">
      <h4>Today</h4>
      <div
        className={classList}
        onMouseDown={(e) => {
          setIsDown(true);
          setClassList(classList + " active");
          setStartX(e.pageX);
        }}
        onMouseLeave={(e) => {
          setIsDown(false);
          setClassList("hourly-forecast__container");
        }}
        onMouseUp={(e) => {
          setIsDown(false);
          setClassList("hourly-forecast__container");
        }}
        onMouseMove={(e) => {
          if (!isDown) return;
          e.preventDefault();
          const x = startX - e.pageX;
          e.target.scrollLeft += x * 2;
        }}
      >
        {hourlyForecast}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});
export default connect(mapStateToProps)(HourlyForecast);

import React from "react";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import MainForecast from "./MainForecast";

const Forecasts = (props) => {
  return (
    <div className="forecasts">
      <MainForecast data={props.data} />
      <HourlyForecast data={props.data.forecast.hourly.data} />
      <DailyForecast data={props.data.forecast.daily.data} />
    </div>
  );
};

export default Forecasts;

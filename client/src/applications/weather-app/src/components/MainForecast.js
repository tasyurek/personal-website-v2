import React from "react";

const MainForecast = (props) => {
  return (
    <div className="main-forecast">
      <h4>{props.data.location}</h4>
      <p>{props.data.summary}</p>
      <h5>{props.data.temperature.toFixed(0)}°</h5>
    </div>
  );
};

export default MainForecast;

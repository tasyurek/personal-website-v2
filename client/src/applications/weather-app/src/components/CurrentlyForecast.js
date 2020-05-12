import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { getForecastDataSet } from "../selectors/forecast";
import { connect } from "react-redux";

const CurrentlyForecast = (props) => {
  const forecastDataSet = getForecastDataSet(props.data, props.settings.units);
  console.log(props.data);

  const OverallForecast = () => (
    <TransitionGroup className="currently-forecast" component={null}>
      {forecastTypes.map((forecast) => {
        if (forecast.isActive) {
          const forecastData = forecastDataSet[forecast.key];

          return (
            <CSSTransition
              key={forecast.key}
              timeout={300}
              classNames="forecast-box"
            >
              <div className="currently-forecast__item box">
                <div className="currently-forecast__item__icon">
                  <forecastData.icon className="weather-icon" />
                </div>
                <div className="currently-forecast__item__content">
                  <h4>{forecastData.name}</h4>
                  <p className="currently-forecast__item__value">
                    {forecastData.value.toFixed(2)}
                    <span className="value__unit">
                      {forecast.key === "temperature"
                        ? forecastData.unit === "si"
                          ? "°C"
                          : "°F"
                        : forecastData.unit}
                    </span>
                  </p>
                </div>
              </div>
            </CSSTransition>
          );
        }
      })}
    </TransitionGroup>
  );

  return (
    <div className="currently-forecast">
      <OverallForecast />
    </div>
  );
};

const mapStateToProps = (state) => ({
  settings: state.settings,
});

export default connect(mapStateToProps)(CurrentlyForecast);

const forecastTypes = [
  { key: "temperature", name: "Temperature", isActive: true },
  { key: "pressure", name: "Pressure", isActive: true },
  { key: "precipProbability", name: "Precip Probability", isActive: true },
  { key: "windSpeed", name: "Wind Speed", isActive: true },
  { key: "humidity", name: "Humidity", isActive: true },
  { key: "uvIndex", name: "UV Index", isActive: true },
];

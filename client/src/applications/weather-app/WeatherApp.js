import React from "react";
import WeatherAppRouter from "./src/routers/WeatherAppRouter";
import configureStore from "./src/stores/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

const WeatherApp = () => {
  return (
    <Provider store={store}>
      <WeatherAppRouter />
    </Provider>
  );
};

export default WeatherApp;

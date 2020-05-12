import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import App from "../App";
import WeatherApp from "../applications/weather-app/WeatherApp";
import CV from "../components/CV/CV";
import StickyContactBar from "../components/StickyContactBar";
const Routers = (props) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact={true} />
      <Route path="/cv" component={CV} exact={true} />
      <WeatherApp />
    </Switch>
    <StickyContactBar />
  </BrowserRouter>
);
export default Routers;

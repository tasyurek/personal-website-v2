import React from "react";
import { Route, BrowserRouter, Switch, Router } from "react-router-dom";
import WeatherPage from "../components/WeatherPage";

const Routers = (props) => (
  <BrowserRouter>
    <Switch>
      <Route path="/weather" component={WeatherPage} exact={true} />
    </Switch>
  </BrowserRouter>
);
export default Routers;

import React, { useEffect } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import App from "../App";
import WeatherApp from "../applications/weather-app/WeatherApp";
import CV from "../components/CV/CV";
import StickyContactBar from "../components/StickyContactBar";
import axios from "axios";

const Routers = (props) => {
  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("login"));

    if (!login) {
      axios
        .post("/api/logininfo")
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
      localStorage.setItem("login", true);
    } else {
      console.log("is already have logged in");
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/cv" component={CV} exact={true} />
        <WeatherApp />
      </Switch>
      <StickyContactBar />
    </BrowserRouter>
  );
};
export default Routers;

import React from "react";
import { ReactComponent as LogoIcon } from "../assets/weather-app-logo-v2.svg";

const NavBar = (props) => {
  return (
    <div className="weather-navbar">
      <div className="weather-navbar__content">
        <LogoIcon className="logo" />
        <h4>Weather App</h4>
      </div>
    </div>
  );
};

export default NavBar;

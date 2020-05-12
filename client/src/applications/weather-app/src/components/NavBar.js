import React from "react";
import { ReactComponent as LogoIcon } from "../assets/logo.svg";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <LogoIcon className="logo" />
        <h4>Weather App</h4>
      </div>
    </div>
  );
};

export default NavBar;

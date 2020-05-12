import React, { useState } from "react";
import "../../src/styles/styles.scss";
import axios from "axios";
import { ReactComponent as CaretSVG } from "../../src/assets/caret-down-solid.svg";
import NavBar from "./NavBar";
import NavItem from "./NavItem";
import DropdownMenu from "./DropdownMenu";
import Forecasts from "./Forecasts";
import { connect } from "react-redux";
import { setForecast } from "../actions/forecast";
import Spinner from "./Spinner";
const WeatherPage = ({ dispatch }) => {
  const [address, setAddress] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onSearchChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!address.trim().length) {
      setError("Please enter a location!");
      return;
    } else {
      setError("");
    }

    axios
      .get("/api/weather?address=" + address + "&units=si" + "&lang=en")
      .then((res) => {
        setData(res.data);
        setLoading(false);
        dispatch(setForecast(res.data.forecast.currently));
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="weather-app">
      <NavBar>
        <NavItem icon="😀" />
        <NavItem icon="🙂" />
        <NavItem icon={<CaretSVG />}>
          <DropdownMenu />
        </NavItem>
      </NavBar>
      <div className="weather-app-content">
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={address}
            onChange={onSearchChange}
            placeholder="Enter a location..."
          />
        </form>
        {error && <p>{error}</p>}
        {isLoading && !error && <Spinner />}
        {!isLoading && data.forecast && <Forecasts data={data} />}
      </div>
    </div>
  );
};

export default connect()(WeatherPage);

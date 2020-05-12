import React from "react";
import { ReactComponent as WeatherAppSVG } from "../assets/weather-app-ss.svg";
import { ReactComponent as RaffleAppSVG } from "../assets/raffle-app.svg";
import { Link } from "react-router-dom";

const Projects = (props) => {
  return (
    <div className="projects" id="projects">
      <div className="project__header">
        <h2>Projects</h2>
        <p>
          The purpose of doing these applications is to keep my abilities up to
          date and improve.
        </p>
      </div>
      <div className="project__item">
        <div className="project__item__info">
          <h3>Weather App</h3>

          <p className="project-about">
            This application gives us the daily and weekly weather forecasts of
            the desired location. ReactJS, Context API and SCSS were used in
            Frontend. NodeJS, Express and DarkSky API were used in Backend.
          </p>
          <Link to="/weather" className="app-link" target="_blank">
            Check it out!
          </Link>
        </div>
        <div className="project__item__img">
          <WeatherAppSVG className="img" />
        </div>
      </div>
      <div className="project__item">
        <div className="project__item__info">
          <h3>Raffle App</h3>
          <p className="project-about">
            It is an application that creates sequences by randomly drawing the
            determined names. ReactJS, Redux and SCSS are used in Frontend.
          </p>
          <a href="http://www.giby.io" className="app-link" target="_blank">
            Check it out!
          </a>
        </div>
        <div className="project__item__img">
          <RaffleAppSVG className="img" />
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import { ReactComponent as WeatherAppSVG } from "../assets/weather-app-ss.svg";
import { ReactComponent as RaffleAppSVG } from "../assets/raffle-app.svg";
import { ReactComponent as GibyLogo } from "../assets/g-logo-v02.svg";
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
      <div className="project__item giby">
        <div className="project__item__info">
          <h3>Giby - Online Test Builder App</h3>
          <h4>www.giby.io</h4>
          <p className="project-about">
            The main purpose of the application; it allows students who are
            preparing for exams to participate in the established courses and
            prepare better for exams.
          </p>
          <p>
            You can easily build your tests in any type you want. Now the
            application is running as demo. Development continues.
          </p>
          <a
            href="http://www.giby.io"
            className="app-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out!
          </a>
          <div className="features">
            <p>ReactJS</p>
            <p>NodeJS</p>
            <p>MongoDB</p>
            <p>SCSS</p>
          </div>
        </div>
        <div className="project__item__img">
          <GibyLogo className="g-logo" />
        </div>
      </div>
      <div className="project__item">
        <div className="project__item__info">
          <h3>Weather App</h3>
          <p className="project-about">
            This application gives us the daily and weekly weather forecasts of
            the desired location. ReactJS, Context API and SCSS were used in
            Frontend. NodeJS, Express and DarkSky API were used in Backend.
          </p>
          <Link
            to="/weather"
            className="app-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out!
          </Link>
          <div className="features">
            <p>NodeJS</p>
            <p>Express</p>
            <p>ReactJS</p>
            <p>Context API</p>
            <p>SCSS</p>
          </div>
        </div>
        <div className="project__item__img">
          <WeatherAppSVG className="img" />
        </div>
      </div>
    </div>
  );
};

export default Projects;

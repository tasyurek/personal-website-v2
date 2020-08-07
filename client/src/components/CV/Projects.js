import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="cv-projects content-pedding">
      <h3>Projects</h3>
      <div className="cv-experiances__item">
        <h4>Giby - Online Test Builder App</h4>
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
      </div>
      <div className="cv-experiances__item">
        <h4>Mouse Movement By Hand Gesture (Image Processing)</h4>
        <p className="project-about">
          Controlling mouse and keyboard with hand gestures in front of a
          webcam. This project is a graduation project.
        </p>
        <a
          href="https://github.com/ErdSavasci/atilim-opencv-senior-project"
          className="app-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check it out!
        </a>
      </div>
      <div className="cv-experiances__item">
        <h4>
          Using Intelligent Support Systems for Endoscopic Surgery (Android
          Application/Unity)
        </h4>
        <p className="project-about">
          This application uses Machine Learning algorithms to estimate score
          more intelligently according to users' plays.
        </p>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="cv-skills content-pedding">
      <h3>Skills</h3>
      <div className="cv-skills__content">
        <div className="cv-skills__content__group">
          <p>Full Stack Web Developer</p>
          <p>Competitive Programmer</p>
          <p>Having fun with code refactoring</p>
        </div>
        <div className="cv-skills__content__group">
          <p>JavaScript - HTML - CSS</p>
          <p>ReactJS - Redux - Context API</p>
          <p>Scss</p>
        </div>
        <div className="cv-skills__content__group">
          <p>NodeJS</p>
          <p>RESTful</p>
          <p>MongoDB - Mongoose</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

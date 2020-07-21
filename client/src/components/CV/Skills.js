import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="cv-skills content-pedding">
      <h3>Skills</h3>
      <div className="cv-skills__content personal">
        <h4>Personal Skills</h4>
        <div className="cv-skills__content__group">
          <p>Management</p>
          <p>Persuasion</p>
          <p>Time management</p>
          <p>Responsibility</p>
        </div>
      </div>
      <div className="cv-skills__content">
        <h4>Technical Skills</h4>
        <div className="cv-skills__content__group">
          <p>Full Stack Web Developer</p>
          <p>Competitive Programmer</p>
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

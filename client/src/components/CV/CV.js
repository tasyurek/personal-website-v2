import React from "react";
import Opening from "./Opening";
import Biography from "./Biography";
import Experiances from "./Experiances";
import Education from "./Education";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import Certificates from "./Certificates";
import Header from "./Header";

const CV = () => {
  return (
    <div className="cv">
      <Header />
      <Opening />
      <Biography />
      <PersonalInfo />
      <Experiances />
      <Education />
      <Skills />
      <Certificates />
    </div>
  );
};

export default CV;

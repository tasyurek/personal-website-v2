import React from "react";

const Education = () => {
  return (
    <div id="education" className="cv-education content-pedding">
      <h3>Education</h3>
      <div className="cv-education__item">
        <div className="cv-education__item__header">
          <h4>Atilim University</h4>
          <p>2012 - 2017</p>
        </div>
        <div className="cv-education__item__info">
          <p>Computer Engineering</p>
          <p>GPA: 2.68</p>
          <p>Kizilcasar, 06830 Incek Gölbasi/Ankara</p>
          <a
            className="nav-link"
            href="http://atilim.edu.tr/en"
            target="_blank"
          >
            www.atilim.edu.tr
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;

import React from "react";

const PersonalInfo = () => {
  return (
    <div id="personal-info" className="personal-info content-pedding">
      <h3>Personal Info</h3>
      <div className="personal-info__item">
        <div className="personal-info__item__block">
          <p>Name: Onur Can Taşyürek</p>
          <p>Date of birth: 02.10.1993</p>
          <p>Email: onurcantasyurek@gmail.com</p>
        </div>
        <div className="personal-info__item__block">
          <p>Address: Ankara/Turkiye</p>
          <p>Military Service: Completed as reserve officer</p>
          <p>Marriage Status: Single</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

import React from "react";
import { ReactComponent as ProfilePhoto } from "../../assets/profile2.svg";
const Biography = () => {
  return (
    <div id="biography" className="cv-biography content-pedding">
      <h3>Biography</h3>
      <div className="cv-biography__content">
        <ProfilePhoto className="cv-biography__content__photo" />
        <div>
          <p>
            I am well educated, ambitious, well disciplined, passionate for
            everything I do, and like to learn new things.
          </p>
          <p>
            After I had interested in developing mobile games for ten months,
            aim to learn how to develop a web application. I have developed web
            applications for two years.
          </p>
          <p>
            My goal is to develop applications for benefit of humanity. I know
            that have to work hard to build these applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Biography;

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log(width);
  }, [width]);

  const calcWidth = () => {
    setWidth(window.innerWidth);
  };

  window.onresize = calcWidth;
  return (
    <div className="cv-header">
      {width > 1100 ? <Navbar /> : <ResponsiveNavbar />}
    </div>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Header = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isResponsive, setResponsive] = useState(false);

  useEffect(() => {
    if (width > 1100) {
      setResponsive(true);
    } else {
      setResponsive(false);
    }
  }, [width]);

  // const calcWidth = () => {
  //   setWidth(window.innerWidth);
  // };

  // window.onresize = calcWidth;

  return (
    <div className="header">
      {/*isResponsive ? <Navbar /> : <ResponsiveNavbar />*/}
    </div>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { ReactComponent as BackIcon } from "../../assets/chevron-left-solid.svg";
import { ReactComponent as CloseIcon } from "../../assets/times-solid.svg";
import { ReactComponent as BarsIcon } from "../../assets/bars-solid.svg";

const ResponsiveNavbar = () => {
  const [isOpen, toggleOpen] = useState(false);
  const [MenuIcon, setMenuIcon] = useState(BackIcon);
  useEffect(() => {
    isOpen ? setMenuIcon(CloseIcon) : setMenuIcon(BarsIcon);
  }, [isOpen]);

  const onMenuClick = () => {
    toggleOpen(!isOpen);
  };

  return (
    <div className="cv-responsive-navbar">
      <div className="cv-responsive-navbar__actions">
        <a className="nav-link" href="/">
          <BackIcon className="icon" />
        </a>
        <MenuIcon className="icon icon--menu" onClick={onMenuClick} />
      </div>
      <div
        className={
          isOpen
            ? "cv-responsive-navbar__navs"
            : "cv-responsive-navbar__navs--closed"
        }
      >
        <a href="#biography" className="nav-link">
          Biography
        </a>
        <a href="#skills" className="nav-link">
          Personal Info
        </a>
        <a href="#biography" className="nav-link">
          Experiances
        </a>
        <a href="#skills" className="nav-link">
          Education
        </a>
        <a href="#biography" className="nav-link">
          Skills
        </a>
        <a href="#certificates" className="nav-link">
          Certificates
        </a>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;

import React, { useState, useEffect } from "react";
import { ReactComponent as ProfilePhoto } from "../assets/profile.svg";
import { ReactComponent as BarsIcon } from "../assets/bars-solid.svg";
import { ReactComponent as CloseIcon } from "../assets/times-solid.svg";

const ResponsiveNavbar = () => {
  const [isOpen, toggleOpen] = useState(false);
  const [MenuIcon, setMenuIcon] = useState(BarsIcon);

  useEffect(() => {
    setMenuIcon(isOpen ? CloseIcon : BarsIcon);
  }, [isOpen]);

  const onMenuClick = () => {
    toggleOpen(!isOpen);
  };

  return (
    <div className="responsive-navbar">
      <div className="responsive-navbar__actions">
        <ProfilePhoto className="header__photo" />
        <MenuIcon className="icon" onClick={onMenuClick} />
      </div>
      <div
        className={
          isOpen ? "responsive-navbar__navs" : "responsive-navbar__navs--closed"
        }
      >
        <a className="nav-link" href="#about" onClick={onMenuClick}>
          About
        </a>
        <a className="nav-link" href="#projects" onClick={onMenuClick}>
          Projects
        </a>
        <a className="nav-link" href="#contact" onClick={onMenuClick}>
          Contact
        </a>
        <a className="nav-link" href="/cv" onClick={onMenuClick}>
          CV
        </a>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;

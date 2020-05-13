import React, { useState, useEffect } from "react";
import { ReactComponent as LinkedInSVG } from "../assets/linkedin-brands.svg";
import { ReactComponent as InstagramSVG } from "../assets/instagram-brands.svg";
import { ReactComponent as GithupSVG } from "../assets/github-brands.svg";
import { ReactComponent as CloseIcon } from "../assets/times-solid.svg";
import { ReactComponent as ShareIcon } from "../assets/paper-plane-solid.svg";

const StickyContactBar = () => {
  const [isOpen, toggleOpen] = useState(false);
  const [MenuIcon, setMenuIcon] = useState(ShareIcon);

  useEffect(() => {
    setMenuIcon(!isOpen ? ShareIcon : CloseIcon);
  }, [isOpen]);

  const onMenuClick = () => {
    toggleOpen(!isOpen);
  };

  return (
    <div className="sticky-contact-bar">
      <div className="sticky-contact-bar__action " onClick={onMenuClick}>
        <MenuIcon className="sticky-contact-bar__action__button" />
      </div>
      {isOpen && <SpreadBar />}
    </div>
  );
};

const SpreadBar = () => {
  return (
    <div className="spread-bar">
      <a
        className="spread-bar__nav"
        href="https://www.linkedin.com/in/onur-can-ta%C5%9Fy%C3%BCrek-58829616a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInSVG className="spread-bar__nav__icon" />
      </a>
      <a
        className="spread-bar__nav"
        href="https://www.instagram.com/onurcantasyurek/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramSVG className="spread-bar__nav__icon" />
      </a>
      <a
        className="spread-bar__nav"
        href="https://github.com/tasyurek/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithupSVG className="spread-bar__nav__icon" />
      </a>
    </div>
  );
};

export default StickyContactBar;

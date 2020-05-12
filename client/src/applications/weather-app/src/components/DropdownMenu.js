import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import { ReactComponent as LeftIcon } from "../../src/assets/cog-solid.svg";
import { ReactComponent as RightIcon } from "../../src/assets/chevron-right-solid.svg";
import { ReactComponent as BackIcon } from "../../src/assets/chevron-left-solid.svg";
import { CSSTransition } from "react-transition-group";

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  const calculateManuHeight = (element) => {
    const height = element.offsetHeight;
    setMenuHeight(height);
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={300}
        classNames="menu-primary"
        onEnter={calculateManuHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            setActiveMenu={setActiveMenu}
            goToMenu="settings"
            leftIcon={<LeftIcon />}
            rightIcon={<RightIcon />}
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={300}
        classNames="menu-primary"
        onEnter={calculateManuHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<BackIcon />}
            setActiveMenu={setActiveMenu}
            goToMenu="main"
          >
            Back to main
          </DropdownItem>
          <DropdownItem
            setActiveMenu={setActiveMenu}
            goToMenu="selectProperties"
          >
            Select Properties
          </DropdownItem>
          <DropdownItem>Settings 2</DropdownItem>
          <DropdownItem>Settings 3</DropdownItem>
          <DropdownItem>Settings 4</DropdownItem>
          <DropdownItem>Settings 5</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "selectProperties"}
        unmountOnExit
        timeout={300}
        classNames="menu-primary"
        onEnter={calculateManuHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<BackIcon />}
            setActiveMenu={setActiveMenu}
            goToMenu="settings"
          >
            Back to settings
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;

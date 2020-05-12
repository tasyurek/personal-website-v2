import React from "react";

const DropdownItem = (props) => {
  return (
    <a
      className="menu-item"
      onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}
    >
      <span className="icon-left">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
};

export default DropdownItem;

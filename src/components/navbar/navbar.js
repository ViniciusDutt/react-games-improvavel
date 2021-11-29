import React from "react";
import "./navbar.css";
import logo from "../../assets/logo-improvavel.svg";
import buzzerButton from "../../assets/buzzer-button.svg";
import bellButton from "../../assets/bell-button.svg";

const Navbar = ({ onMouseUp, onMouseDown, onClick }) => {
  return (
    <header className="navbar paper-shadow grid" id="header">
      <div />
      <div className="d-flex justify-space-between">
        <img src={logo} width="192" />
        <div>
          <img
            className="bellButton"
            src={bellButton}
            onClick={onClick}
            height="32"
          />
          <img
            className="buzzerButton"
            src={buzzerButton}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            height="32"
          />
        </div>
      </div>
      <div />
    </header>
  );
};

export default Navbar;

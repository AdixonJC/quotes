import React from "react";
import "./styles.css";

const Button = ({ buttonFunction, icon, buttonActive, colorBt }) => {
  return (
    <div className="buttonContainer">
      <button
        onClick={buttonFunction}
        disabled={buttonActive}
        style={{ color: colorBt }}
      >
        <span className={icon}></span>
      </button>
    </div>
  );
};

export default Button;

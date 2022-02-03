import React from "react";

const Button = ({ children, color, click }) => {
  return (
    <button
      style={{ backgroundColor: color, cursor: "pointer" }}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;

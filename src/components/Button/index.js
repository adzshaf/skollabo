import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={`bg-blue rounded-full ${className}`}>{children}</button>
  );
};

export default Button;

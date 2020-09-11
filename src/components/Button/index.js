import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`bg-blue rounded-full ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

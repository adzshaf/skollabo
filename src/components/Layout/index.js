import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children, ...props }) => {
  return (
    <div className="h-screen">
      <Navbar {...props} />
      {children}
    </div>
  );
};

export default Layout;

import React from "react";
import "../../tailwind.output.css";

const Navbar = () => {
  return (
    <div className="bg-blue flex flex-row justify-between py-4 px-8">
      <h1 className="text-3xl text-cream">Skollabo</h1>
      <div>
        <button className="text-blue bg-cream text-2xl rounded-full px-4 w-32">
          sign up
        </button>
        <button className="text-cream bg-blue text-2xl rounded-full border-2 px-4 ml-4 w-32">
          log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;

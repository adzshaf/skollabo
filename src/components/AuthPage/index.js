import React, { useState } from "react";
import close from "./close-round-grey.svg";
import Button from "../Button";

const AuthPage = ({ closePage, ...props }) => {
  const [roleSignUp, setRoleSignUp] = useState("");

  return (
    <div className="bg-green w-screen h-screen flex justify-center items-center px-64">
      <div className="flex flex-col bg-white rounded-lg h-112 w-128 px-8 py-8 relative">
        <img
          src={close}
          alt="Close"
          className="absolute top-0 right-0 p-4 cursor-pointer"
          onClick={closePage}
        />
        <div className="text-3xl">
          <h1 className="text-center">
            {roleSignUp == "" ? "Welcome to Skollabo" : roleSignUp}
          </h1>
        </div>
        {roleSignUp !== "" && (
          <div className="flex flex-row justify-center items-center pt-12">
            <div
              className="bg-blue w-48 h-48 flex justify-center items-center mr-8 rounded-lg cursor-pointer"
              onClick={() => setRoleSignUp("teacher")}
            >
              <h2 className="text-white text-xl">teacher</h2>
            </div>
            <div
              className="bg-blue-bright w-48 h-48 flex justify-center items-center rounded-lg cursor-pointer"
              onClick={() => setRoleSignUp("student")}
            >
              <h2 className="text-white text-xl">student</h2>
            </div>
          </div>
        )}
        {roleSignUp === "" && (
          <div>
            <div className="flex flex-row justify-between">
              <h2 className="text-2xl cursor-pointer">login</h2>
              <h2 className="text-2xl cursor-pointer">signup</h2>
            </div>
            <div className="flex flex-col mt-8">
              <input
                className="py-2 px-4 border-b border-opacity-25 focus:none mb-2 border-grey"
                placeholder="Your Name"
              />
              <input
                className="py-2 px-4 border-b border-opacity-25 focus:none mb-2 border-grey"
                placeholder="Email address"
                type="email"
              />
              <input
                className="py-2 px-4 border-b border-opacity-25 focus:none mb-2 border-grey"
                placeholder="Password"
                type="password"
              />
              <div className="flex flex-col items-center">
                <Button className="text-white text-2xl p-2 bg-blue-cornflower mt-4 w-64 mb-4">
                  Create Account
                </Button>
                <p className="text-center text-grey">
                  By continuing to use our service, you accept our Terms of
                  Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;

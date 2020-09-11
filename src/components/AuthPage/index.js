import React, { useState } from "react";
import close from "./close-round-grey.svg";

const AuthPage = ({ closePage, ...props }) => {
  const [teacherSignUp, setTeacherSignUp] = useState(false);
  return (
    <div className="bg-green w-screen h-screen flex justify-center items-center px-64">
      <div className="flex flex-col bg-white rounded-lg h-96 w-128 px-8 py-8 relative">
        <img
          src={close}
          alt="Close"
          className="absolute top-0 right-0 p-4 cursor-pointer"
          onClick={closePage}
        />
        <div className="text-3xl">
          <h1 className="text-center">Welcome to Skollabo</h1>
        </div>
        <div className="flex flex-row justify-center items-center pt-12">
          <div className="bg-blue w-48 h-48 flex justify-center items-center mr-8 rounded-lg cursor-pointer">
            <h2 className="text-white text-xl">teacher</h2>
          </div>
          <div className="bg-blue-bright w-48 h-48 flex justify-center items-center rounded-lg cursor-pointer">
            <h2 className="text-white text-xl">student</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

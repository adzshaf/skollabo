import React, { useState } from "react";
import { useIdentityContext } from "react-netlify-identity";
import close from "./close-round-grey.svg";
import Button from "../Button";

const AuthPage = ({ closePage, ...props }) => {
  const [roleSignUp, setRoleSignUp] = useState("");
  const [mode, setMode] = useState(props.defaultAuth);
  const { signupUser } = useIdentityContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  console.log(name);

  const signup = () => {
    signupUser(email, password, {}, false)
      .then((user) => {
        console.log("Success! Signed up", user);
      })
      .catch(
        (err) => void console.error(err) || console.log("Error: " + err.message)
      );
  };

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
            {roleSignUp === "" ? "Welcome to Skollabo" : roleSignUp}
          </h1>
        </div>
        {roleSignUp === "" && (
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
        {roleSignUp !== "" && (
          <div>
            <div className="flex flex-row justify-between">
              <h2
                className="text-2xl cursor-pointer"
                onClick={() => setMode("login")}
              >
                login
              </h2>
              <h2
                className="text-2xl cursor-pointer"
                onClick={() => setMode("sign up")}
              >
                signup
              </h2>
            </div>
            <div className="flex flex-col mt-8">
              {mode === "sign up" && (
                <input
                  className="py-2 px-4 border-b border-opacity-25 focus:none mb-2 border-grey w-full"
                  placeholder="Your Name"
                  name="username"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                className="py-2 px-4 border-b border-opacity-25 focus:none mb-2 border-grey w-full"
                placeholder="Email address"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="py-2 px-4 border-b border-opacity-25 focus:none mb-2 border-grey w-full"
                placeholder="Password"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex flex-col items-center">
                <Button
                  className="text-white text-2xl p-2 bg-blue-cornflower mt-4 w-64 mb-4"
                  onClick={signup}
                >
                  {mode === "sign up" && "Create Account"}
                  {mode === "login" && "Log in"}
                </Button>
                <p className="text-center text-grey">
                  {mode === "sign up" &&
                    "By continuing to use our service, you accept our Terms of Service and Privacy Policy"}
                  {mode === "login" && "Forgot Password?"}
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

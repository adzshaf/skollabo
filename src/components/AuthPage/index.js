import React, { useState } from "react";
import { useIdentityContext } from "react-netlify-identity";
import close from "./close-round-grey.svg";
import Button from "../Button";

const AuthPage = ({ closePage, ...props }) => {
  const [roleSignUp, setRoleSignUp] = useState("");
  const [mode, setMode] = useState(props.defaultAuth);
  const { signupUser } = useIdentityContext();
  const formRef = React.useRef();

  const signup = () => {
    if (!formRef.current) return;
    // const full_name = formRef.current.username.value;
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;
    // const data = { roles: roleSignUp, full_name };
    signupUser(email, password, {}, true)
      .then((user) => {
        if (process.env.NODE_ENV !== "production")
          console.log("Success! Signed up", user);
        else {
          console.log("success!", user);
        }
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
              <form ref={formRef} onSubmit={() => signup()}>
                {mode === "sign up" && (
                  <input
                    className="py-2 px-4 border-b border-opacity-25 focus:none mb-2 border-grey w-full"
                    placeholder="Your Name"
                    name="username"
                  />
                )}
                <input
                  className="py-2 px-4 border-b border-opacity-25 focus:none mb-2 border-grey w-full"
                  placeholder="Email address"
                  type="email"
                  name="email"
                />
                <input
                  className="py-2 px-4 border-b border-opacity-25 focus:none mb-2 border-grey w-full"
                  placeholder="Password"
                  type="password"
                  name="password"
                />
                <div className="flex flex-col items-center">
                  <Button
                    className="text-white text-2xl p-2 bg-blue-cornflower mt-4 w-64 mb-4"
                    type="submit"
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
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;

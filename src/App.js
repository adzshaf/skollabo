import React, { useState } from "react";
import "./tailwind.output.css";
import LandingPage from "./components/LandingPage";
import AuthPage from "./components/AuthPage";

const App = () => {
  const [signUpPage, setSignUpPage] = useState(false);

  return (
    <div>
      {signUpPage ? (
        <AuthPage closePage={() => setSignUpPage(false)} />
      ) : (
        <LandingPage onClickSignUp={() => setSignUpPage(true)} />
      )}
    </div>
  );
};

export default App;

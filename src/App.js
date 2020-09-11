import React, { useState } from "react";
import "./tailwind.output.css";
import LandingPage from "./components/LandingPage";
import AuthPage from "./components/AuthPage";

const App = () => {
  const [authPage, setAuthPage] = useState(false);
  const [defaultAuth, setDefaultAuth] = useState("");
  const moveToAuth = (route) => {
    setDefaultAuth(route);
    setAuthPage(true);
  };

  return (
    <div>
      {authPage ? (
        <AuthPage
          closePage={() => setAuthPage(false)}
          defaultAuth={defaultAuth}
        />
      ) : (
        <LandingPage onClickAuth={moveToAuth} />
      )}
    </div>
  );
};

export default App;

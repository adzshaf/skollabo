import React, { useState } from "react";
import { IdentityContextProvider } from "react-netlify-identity";
import "./tailwind.output.css";
import LandingPage from "./components/LandingPage";
import AuthPage from "./components/AuthPage";

const App = () => {
  const url = "https://skollabo.netlify.app/";

  const [authPage, setAuthPage] = useState(false);
  const [defaultAuth, setDefaultAuth] = useState("");
  const moveToAuth = (route) => {
    setDefaultAuth(route);
    setAuthPage(true);
  };

  return (
    <IdentityContextProvider url={url}>
      {authPage ? (
        <AuthPage
          closePage={() => setAuthPage(false)}
          defaultAuth={defaultAuth}
        />
      ) : (
        <LandingPage onClickAuth={moveToAuth} />
      )}
    </IdentityContextProvider>
  );
};

export default App;

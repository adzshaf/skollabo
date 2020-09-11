import React from "react";
import Layout from "../Layout";
import "./style.css";
import background from "./background.png";
import hero from "./asset-hero.png";
import Button from "../Button";

const LandingPage = () => {
  return (
    <Layout>
      <img className="w-screen background-hero" src={background} />
      <div className="relative pt-8 flex flex-col justify-center items-center">
        <h1 className="text-blue text-center text-6xl">Good Marketing line</h1>
        <p className="text-blue text-center text-2xl">
          A fun solution for distance collaborative learning
        </p>
        <Button className="text-white text-2xl px-4 py-2 mt-4 w-64">
          Learn more
        </Button>
        <img src={hero} />
      </div>
    </Layout>
  );
};

export default LandingPage;

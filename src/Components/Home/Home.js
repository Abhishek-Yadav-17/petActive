import React from "react";
import "./Home.css";
import Inro from "./Intro/Inro";
import Features from "./Features/Features";
import Testamonial from "./Tetamonial/Testamonial";
import Pricing from "./Pricing/Pricing";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <>
      <div className="Home">
        <Inro />
        <Features />
        <Testamonial />
        <Pricing />
        <Contact/>
      </div>
    </>
  );
};

export default Home;

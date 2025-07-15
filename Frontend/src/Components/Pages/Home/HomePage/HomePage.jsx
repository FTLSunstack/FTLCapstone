import { useState } from "react";
import "../../../../tailwind.css";
import HomeNavBar from "../HomeNavBar/HomeNavBar.jsx";
import Footer from "../../../Common/Footer/Footer.jsx";
import Intro from "../Intro/Intro.jsx";
import Features from "../Features/Features.jsx";
import GetStarted from "../GetStarted/GetStarted.jsx";
import AboutUs from "../AboutUs/AboutUs.jsx";

function HomePage() {
  return (
    <>
      <HomeNavBar />
      <div className="flex flex-col items-center justify-center min-w-screen">
        <Intro />
        <Features />
        <AboutUs />
        <GetStarted />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;

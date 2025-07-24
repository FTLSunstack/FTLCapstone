import { useState, useRef } from "react";
import "../../../../tailwind.css";
import HomeNavBar from "../HomeNavBar/HomeNavBar.jsx";
import Footer from "../../../Common/Footer/Footer.jsx";
import Intro from "../Intro/Intro.jsx";
import Features from "../Features/Features.jsx";
import GetStarted from "../GetStarted/GetStarted.jsx";
import AboutUs from "../AboutUs/AboutUs.jsx";

function HomePage({ language, setLanguage }) {
  const featuresRef = useRef(null);
  const aboutUsRef = useRef(null);
  const getStartedRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HomeNavBar
        language={language}
        setLanguage={setLanguage}
        onScrollToFeatures={() => scrollTo(featuresRef)}
        onScrollToAboutUs={() => scrollTo(aboutUsRef)}
        onScrollToGetStarted={() => scrollTo(getStartedRef)}
      />
      <div className="flex flex-col items-center justify-center min-w-screen">
        <Intro
          language={language}
          scrollToFeatures={() => scrollTo(featuresRef)}
        />
        <div ref={featuresRef}>
          <Features language={language} />
        </div>
        <div ref={aboutUsRef}>
          <AboutUs language={language} />
        </div>
        <div ref={getStartedRef}>
          <GetStarted language={language} />
        </div>
      </div>
      <Footer language={language} />
    </>
  );
}

export default HomePage;

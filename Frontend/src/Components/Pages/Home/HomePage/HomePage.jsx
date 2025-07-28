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
    <div className="min-h-screen w-full overflow-x-hidden">
      <HomeNavBar
        language={language}
        setLanguage={setLanguage}
        onScrollToFeatures={() => scrollTo(featuresRef)}
        onScrollToAboutUs={() => scrollTo(aboutUsRef)}
        onScrollToGetStarted={() => scrollTo(getStartedRef)}
      />

      <main className="w-full">
        <Intro
          language={language}
          scrollToFeatures={() => scrollTo(featuresRef)}
        />

        <section ref={featuresRef} className="w-full">
          <Features language={language} />
        </section>

        <section ref={aboutUsRef} className="w-full">
          <AboutUs language={language} />
        </section>

        <section ref={getStartedRef} className="w-full">
          <GetStarted language={language} />
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
}

export default HomePage;

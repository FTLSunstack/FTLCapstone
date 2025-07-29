import { useState } from "react";
import "../../../../tailwind.css";
import AnimatedBackground from "../AnimatedBackground/AnimatedBackground.jsx"; // Import the new component

function Intro({ language, scrollToFeatures }) {
  const handleIntroClick = () => {
    scrollToFeatures();
  };

  return (
    <div className="w-full">
      <AnimatedBackground language={language} goDown={handleIntroClick} />
    </div>
  );
}

export default Intro;

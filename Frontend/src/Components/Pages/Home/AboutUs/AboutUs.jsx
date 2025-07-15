import { useState } from "react";
import "../../../../tailwind.css";
import CreatorCard from "../CreatorCard/CreatorCard.jsx";
import Mission from "../Mission/Mission.jsx";

function AboutUs() {
  return (
    <>
      <Mission />
      <CreatorCard />
      <CreatorCard />
      <CreatorCard />
    </>
  );
}

export default AboutUs;

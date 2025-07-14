import { useState } from "react";
import "../../../../tailwind.css";
import NavBar from "../../../Common/NavBar/NavBar.jsx";
import Footer from "../../../Common/Footer/Footer.jsx";
import Intro from "../Intro/Intro.jsx";
import Mission from "../Mission/Mission.jsx";
import Features from "../Features/Features.jsx";
import GetStarted from "../GetStarted/GetStarted.jsx";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Intro />
      <Mission />
      <Features />
      <GetStarted />
      <Footer />
    </>
  );
}

export default HomePage;

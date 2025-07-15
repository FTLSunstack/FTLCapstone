import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "../../tailwind.css";
import HomePage from "../Pages/Home/HomePage/HomePage.jsx";
import IDEPage from "../Pages/IDE/IDEPage/IDEPage";

import GlossaryPage from "../Pages/Glossary/GlossaryPage/GlossaryPage.jsx";
import AboutUsPage from "../Pages/AboutUs/AboutUsPage/AboutUsPage.jsx";

function App() {
  return (
    <>
      <div>
        <IDEPage />
        {/* <HomePage /> */}
        {/* <GlossaryPage /> */}
        {/* <AboutUsPage /> */}
      </div>
    </>
  );
}

export default App;

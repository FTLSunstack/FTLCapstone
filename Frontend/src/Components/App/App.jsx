import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "../../tailwind.css";
import HomePage from "../Pages/Home/HomePage/HomePage.jsx";
import IDEPage from "../Pages/IDE/IDEPage/IDEPage";
import GlossaryPage from "../Pages/Glossary/GlossaryPage/GlossaryPage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <IDEPage />
        <HomePage />
        <GlossaryPage />
      </div>
    </>
  );
}

export default App;

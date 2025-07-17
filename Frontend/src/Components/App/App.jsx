import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../tailwind.css";
import HomePage from "../Pages/Home/HomePage/HomePage.jsx";
import IDEPage from "../Pages/IDE/IDEPage/IDEPage";
import LoginPage from "../Pages/Auth/LoginPage.jsx";
import GlossaryPage from "../Pages/Glossary/GlossaryPage/GlossaryPage.jsx";
import SignUpPage from "../Pages/Auth/SignUpPage.jsx";

function App() {
  const [language, setLanguage] = useState("Español");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage language={language} />} />
        <Route path="/signup" element={<SignUpPage language={language} />} />
        <Route
          path="/"
          element={<HomePage language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="/glossary"
          element={
            <GlossaryPage language={language} setLanguage={setLanguage} />
          }
        />
        <Route
          path="/ide"
          element={<IDEPage language={language} setLanguage={setLanguage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

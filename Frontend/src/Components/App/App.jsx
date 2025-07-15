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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/ide" element={<IDEPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

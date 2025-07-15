import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../../tailwind.css";
import HomePage from "../Pages/Home/HomePage/HomePage.jsx";
import IDEPage from "../Pages/IDE/IDEPage/IDEPage";
import LoginPage from "../Pages/Auth/LoginPage.jsx";
import GlossaryPage from "../Pages/Glossary/GlossaryPage/GlossaryPage.jsx";

function App() {
  return (
<<<<<<< HEAD
    <>
      <div>
        {/* <IDEPage /> */}
        <HomePage />
        {/* <GlossaryPage /> */}
      </div>
    </>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/ide" element={<IDEPage />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 48bf0a49d6a9bb77cca14ba6c5d3e7b9b0d7393e
  );
}

export default App;

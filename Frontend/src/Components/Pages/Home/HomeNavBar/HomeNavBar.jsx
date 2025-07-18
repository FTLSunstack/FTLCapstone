import "../../../../tailwind.css";
import { useNavigate } from "react-router-dom";

import React from "react";

export default function HomeNavBar({
  language,
  setLanguage,
  onScrollToFeatures,
  onScrollToAboutUs,
  onScrollToGetStarted,
}) {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleChangeLanguage = () => {
    if (language === "English") {
      setLanguage("Español");
    } else {
      setLanguage("English");
    }
  };

  return (
    <>
      {language === "Español" ? (
        <div className="bg-white p-5 flex flex-row justify-between items-center shadow-lg">
          <h1 className="text-violet-600 font-bold text-3xl hover:cursor-pointer hover:opacity-70 transition ease-in-out">
            Codifica
          </h1>

          <div className="flex flex-row gap-10 ml-60">
            <button
              onClick={onScrollToFeatures}
              className="text-gray-500 hover:text-black"
            >
              Características
            </button>
            <button
              onClick={onScrollToAboutUs}
              className="text-gray-500 hover:text-black transition ease-in-out"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={onScrollToGetStarted}
              className="text-gray-500 hover:text-black transition ease-in-out"
            >
              Comenzar
            </button>
          </div>
          <div className="flex flex-row space-x-5">
            <button
              onClick={handleChangeLanguage}
              className="bg-violet-500 px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-violet-700 transition ease-in-out"
            >
              {language}
            </button>
            <button
              onClick={handleLogin}
              className="px-5 py-2 outline outline-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white hover:cursor-pointer transition ease-in-out"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={handleSignUp}
              className="bg-red-400 px-5 py-2 bg-violet-500 text-white rounded-md outline outline-white  hover:bg-violet-600 hover:cursor-pointer transition ease-in-out"
            >
              Registrarse
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white p-5 flex flex-row justify-between items-center border-b border-black">
          <h1 className="text-violet-600 font-bold text-3xl hover:cursor-pointer hover:opacity-70 transition ease-in-out">
            Codifica
          </h1>

          <div className="flex flex-row gap-10">
            <button
              onClick={onScrollToFeatures}
              className="text-gray-500 hover:text-black"
            >
              Features
            </button>
            <button
              onClick={onScrollToAboutUs}
              className="text-gray-500 hover:text-black transition ease-in-out"
            >
              About Us
            </button>
            <button
              onClick={onScrollToGetStarted}
              className="text-gray-500 hover:text-black transition ease-in-out"
            >
              Get Started
            </button>
          </div>
          <div className="flex flex-row space-x-5">
            <button
              onClick={handleChangeLanguage}
              className="bg-violet-500 px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-violet-700 transition ease-in-out"
            >
              {language}
            </button>
            <button
              onClick={handleLogin}
              className="px-5 py-2 outline outline-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white hover:cursor-pointer transition ease-in-out"
            >
              Sign In
            </button>
            <button
              onClick={handleSignUp}
              className="bg-red-400 px-5 py-2 bg-violet-500 text-white rounded-md outline outline-white  hover:bg-violet-600 hover:cursor-pointer transition ease-in-out"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </>
  );
}

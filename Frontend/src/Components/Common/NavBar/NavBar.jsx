import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../tailwind.css";
import { useAuth } from "../../../Context/AuthContext";

function NavBar({ language, setLanguage }) {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const handleUserLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log("LogOUT successful!", response.data);
      navigate("/");
      setUser(null);
    } catch (err) {
      alert(
        err.response?.data?.error ||
          err.response?.data?.message ||
          "Logout Failed"
      );
    }
  };

  const handleChangeLanguage = () => {
    if (language === "English") {
      setLanguage("Español");
    } else {
      setLanguage("English");
    }
  };

  const handleGlossaryClick = () => {
    navigate("/glossary");
  };

  const handleIdeClick = () => {
    navigate("/ide");
  };

  const handleBackToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      {language === "English" ? (
        <div>
          <div className="bg-white p-5 flex flex-row justify-between items-center shadow-2xl/30">
            <h1
              className="text-violet-600 font-bold text-3xl hover:cursor-pointer hover:opacity-70 transition ease-in-out"
              onClick={handleBackToHomePage}
            >
              Codifica
            </h1>

            <div className="flex flex-row gap-10">
              <a
                onClick={handleIdeClick}
                className="text-lg text-gray-500 hover:text-black transition ease-in-out cursor-pointer"
              >
                IDE
              </a>
              <a
                onClick={handleGlossaryClick}
                className="text-lg text-gray-500 hover:text-black transition ease-in-out cursor-pointer"
              >
                Glossary
              </a>
              <a
                href="#"
                className="text-lg text-gray-500 hover:text-black transition ease-in-out"
              >
                About
              </a>
            </div>

            <div className="flex flex-row space-x-5">
              <button
                onClick={handleChangeLanguage}
                className="bg-violet-500 px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-violet-700 transition ease-in-out"
              >
                {language}
              </button>
              <button
                onClick={handleUserLogout}
                className="px-5 py-2 outline outline-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white hover:cursor-pointer transition ease-in-out"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-white p-5 flex flex-row justify-between items-center shadow-2xl/30">
            <h1
              className="text-violet-600 font-bold text-3xl hover:cursor-pointer hover:opacity-70 transition ease-in-out"
              onClick={handleBackToHomePage}
            >
              Codifica
            </h1>

            <div className="flex flex-row gap-10">
              <a
                onClick={handleIdeClick}
                className="text-lg text-gray-500 hover:text-black transition ease-in-out cursor-pointer"
              >
                IDE
              </a>
              <a
                onClick={handleGlossaryClick}
                className="text-lg text-gray-500 hover:text-black transition ease-in-out cursor-pointer"
              >
                Glosario
              </a>
              <a
                href="#"
                className="text-lg text-gray-500 hover:text-black transition ease-in-out"
              >
                Sobre Nosotros
              </a>
            </div>

            <div className="flex flex-row space-x-5">
              <button
                onClick={handleChangeLanguage}
                className="bg-violet-500 px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-violet-700 transition ease-in-out"
              >
                {language}
              </button>
              <button
                onClick={handleUserLogout}
                className="px-5 py-2 outline outline-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white hover:cursor-pointer transition ease-in-out"
              >
                Finalizar Sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;

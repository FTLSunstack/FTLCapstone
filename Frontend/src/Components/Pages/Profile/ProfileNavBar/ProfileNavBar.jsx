import React from "react";
import { useState } from "react";
import "../../../../tailwind.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import { useAuth } from "../../../../Context/AuthContext";

export default function ProfileNavBar({ lastPage, language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { setUser } = useAuth();

  const handleBackToHomePage = () => {
    if (lastPage === "home") {
      navigate("/");
    } else {
      navigate(`/${lastPage}`);
    }
  };

  const handleChangeLanguage = () => {
    if (language === "English") {
      setLanguage("Español");
    } else {
      setLanguage("English");
    }
  };

  const logOutNotifSuccess = () =>
    toast.warning("You have logged out", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const handleUserLogout = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );
      console.log("LogOut successful!", response.data);
      logOutNotifSuccess();
      setTimeout(() => {
        navigate("/");
      }, 100);
      setUser(null);
    } catch (err) {
      alert(
        err.response?.data?.error ||
          err.response?.data?.message ||
          "Logout Failed"
      );
      console.log(err);
    }
  };

  return (
    <div className="w-full p-5 flex flex-row justify-between items-center">
      <div className="flex flex-row justify-between w-full">
        <h1
          className="text-violet-600 font-bold text-3xl hover:cursor-pointer hover:opacity-70 transition-all hover:scale-105 ease-in-out mr-4"
          onClick={handleBackToHomePage}
        >
          Codifica
        </h1>
        <div className="flex flex-row gap-8">
          <button
            className="md:hidden group text-white bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1"
            onClick={handleBackToHomePage}
          >
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              {language === "Español" ? "Atrás" : "Back"}
            </div>
          </button>
          {/* Hamburger Icon (visible only on mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden block focus:outline-none"
          >
            <svg
              className={`w-8 h-8 ${
                isOpen
                  ? "text-violet-400 hover:text-violet-600"
                  : "text-violet-600 hover:text-violet-400"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="hidden md:flex flex-row gap-5">
        <button
          className="group text-white bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1"
          onClick={handleBackToHomePage}
        >
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            {language === "Español" ? "Atrás" : "Back"}
          </div>
        </button>
        <button
          onClick={handleChangeLanguage}
          className="px-5 py-2 border-violet-700 bg-violet-500 text-violet-700 rounded-md shadow-md backdrop-blur-lg transition-all hover:cursor-pointer hover:bg-violet-700 text-white hover:scale-105 hover:shadow-lg border border-gray-300 duration-300"
        >
          {language === "Español" ? "English" : "Español"}
        </button>
        <button
          onClick={handleUserLogout}
          className="whitespace-nowrap border border-violet-700 text-violet-700 px-5 py-2 rounded-lg hover:bg-violet-700 hover:text-white hover:scale-105 hover:shadow-lg transition ease-in-out cursor-pointer duration-300"
        >
          <div>{language === "Español" ? "Finalizar Sesión" : "Logout"}</div>
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 px-5 py-4 bg-white/10 backdrop-blur-md text-white absolute top-[80px] left-0 right-0 z-40 shadow-lg">
          <button
            onClick={handleChangeLanguage}
            className="px-5 py-2 border-violet-700 bg-violet-500 rounded-lg shadow-md backdrop-blur-lg transition-all hover:cursor-pointer hover:bg-violet-700 text-white hover:scale-105 hover:shadow-lg border border-gray-300 duration-300"
          >
            {language === "Español" ? "English" : "Español"}
          </button>
          <button
            onClick={handleUserLogout}
            className="border border-violet-700 bg-violet-500 text-white px-5 py-2 rounded-lg backdrop-blur-lg hover:bg-violet-700 hover:scale-105 hover:shadow-lg transition ease-in-out cursor-pointer duration-300"
          >
            {language === "Español" ? "Finalizar Sesión" : "Logout"}
          </button>
        </div>
      )}
    </div>
  );
}

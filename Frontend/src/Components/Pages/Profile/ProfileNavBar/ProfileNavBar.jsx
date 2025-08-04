import React from "react";
import "../../../../tailwind.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import { useAuth } from "../../../../Context/AuthContext";

export default function ProfileNavBar({ lastPage, language, setLanguage }) {
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
      <h1
        className="text-violet-600 font-bold text-3xl hover:cursor-pointer hover:opacity-70 transition-all hover:scale-105 ease-in-out mr-4"
        onClick={handleBackToHomePage}
      >
        Codifica
      </h1>
      <div className="flex flex-row gap-5">
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
          className="border border-violet-700 text-violet-700 px-5 py-2 rounded-lg hover:bg-violet-700 hover:text-white hover:scale-105 hover:shadow-lg transition ease-in-out cursor-pointer duration-300"
        >
          <div>Logout</div>
        </button>
      </div>
    </div>
  );
}

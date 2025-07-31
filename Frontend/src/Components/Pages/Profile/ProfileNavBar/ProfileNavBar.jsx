import React from "react";
import "../../../../tailwind.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import { useAuth } from "../../../../Context/AuthContext";

export default function ProfileNavBar() {
  const navigate = useNavigate();

  const { setUser } = useAuth();

  const handleBackToHomePage = () => {
    navigate("/");
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
        className="text-3xl font-semibold text-violet-600 cursor-pointer hover:opacity-70 transition ease-in-out"
        onClick={handleBackToHomePage}
      >
        Codifica
      </h1>
      <div className="flex flex-row gap-5">
        <button
          className="group font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1"
          onClick={handleBackToHomePage}
        >
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back
          </div>
        </button>
        <button
          onClick={handleUserLogout}
          className="border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-100 transition ease-in-out cursor-pointer"
        >
          <div>Logout</div>
        </button>
      </div>
    </div>
  );
}

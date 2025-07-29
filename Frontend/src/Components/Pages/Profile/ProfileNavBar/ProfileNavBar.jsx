import React from "react";
import "../../../../tailwind.css";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ProfileNavBar() {
  const navigate = useNavigate();

  const handleBackToHomePage = () => {
    navigate("/");
  };
  return (
    <div className="w-full p-5 flex flex-row justify-between items-center">
      <h1
        className="text-3xl font-semibold text-violet-600 cursor-pointer hover:opacity-70 transition ease-in-out"
        onClick={handleBackToHomePage}
      >
        Codifica
      </h1>
      <button
        className="group font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1"
        onClick={handleBackToHomePage}
      >
        <div className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back
        </div>
      </button>
    </div>
  );
}

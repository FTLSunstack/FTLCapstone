import React from "react";
import "../../../../tailwind.css";
import { useNavigate } from "react-router-dom";

export default function ProfileNavBar() {
  const navigate = useNavigate();

  const handleBackToHomePage = () => {
    navigate("/");
  };
  return (
    <div className="w-full p-5 border-b-1 flex flex-row justify-between">
      <h1
        className="text-3xl font-semibold text-violet-600 cursor-pointer hover:opacity-70 transition ease-in-out"
        onClick={handleBackToHomePage}
      >
        Codifica
      </h1>
      <button
        className="font-semibold text-white bg-violet-600 py-2 px-6 rounded-md hover:opacity-70 transition ease-in-out cursor-pointer"
        onClick={handleBackToHomePage}
      >
        Back
      </button>
    </div>
  );
}

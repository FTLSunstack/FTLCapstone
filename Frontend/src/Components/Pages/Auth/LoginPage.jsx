import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../tailwind.css";
import LoginForm from "./LoginForm";

function LoginPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="opacity-90 min-h-screen h-14 bg-gradient-to-r from-violet-600 to-blue-800">
      <button
        onClick={handleBack}
        className="mt-8 ml-10 mb-8 py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-white hover:bg-white hover:text-black "
      >
        {" "}
        Back Home
      </button>
      <div className="flex flex-col items-center justify-center w-screen">
        <LoginForm></LoginForm>
      </div>
      <h1>Footer goes here</h1>
    </div>
  );
}

export default LoginPage;

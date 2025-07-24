import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../tailwind.css";
import LoginForm from "./LoginForm";
import Footer from "../../../Common/Footer/Footer";

function LoginPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-tl from-purple-700 via-violet-600 to-blue-600">
        <button
          onClick={handleBack}
          className="px-5 py-2 border border-white/40 text-white rounded-md hover:bg-white/20 backdrop-blur-md hover:cursor-pointer transition ease-in-out drop-shadow-lg m-10"
        >
          Back Home
        </button>
        <div className="flex flex-col opacity-100 items-center min-h-[calc(100vh-140px)] justify-center">
          <div className="mt-10">
            <div className="flex flex-col items-center justify-center w-screen mb-15">
              <LoginForm></LoginForm>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

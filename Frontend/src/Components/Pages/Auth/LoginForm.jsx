import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../tailwind.css";
import LoginInput from "./LoginInput";

function LoginForm() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="LoginForm bg-white bg-center flex flex-col items-center w-100 h-140 rounded-md ">
      <div className="Title Header align-center">
        <div className="Title mt-10 mb-4 text-center text-violet-600 font-bold text-5xl">
          Codifica
        </div>
        <div className="Caption mb-6 text-center text-black font-bold text-xl">
          Welcome Back!
        </div>
      </div>
      <LoginInput></LoginInput>
      <container className="flex flex-col items-left">
        <p className="mt-4 ml-1 text-center text-indigo-600 hover:text-purple-800 transition ease-in-out hover:cursor-pointer">
          {" "}
          Forgot password?
        </p>
        <button
          onClick={handleBack}
          className="mt-2 mb-4 py-2 px-30 text-center font-semibold rounded-lg shadow-md text-white bg-indigo-700 hover:bg-blue-800 cursor-pointer"
        >
          {" "}
          Sign In
        </button>
      </container>
      <container className="flex flex-row">
        <p className="text-xs text-gray-500"> Don't have an account? </p>
        <p
          onClick={handleSignUp}
          className="ml-3 text-xs text-gray-500 underline hover:text-indigo-500 hover:cursor-pointer"
        >
          {" "}
          Sign up for free
        </p>
      </container>
    </div>
  );
}

export default LoginForm;

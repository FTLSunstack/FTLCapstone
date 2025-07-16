import { useState } from "react";
import "../../../tailwind.css";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./SignUpForm";

function SignUpPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="opacity-90 min-h-screen h-14 bg-gradient-to-r from-violet-600 to-blue-800">
      <button
        onClick={handleBack}
        className="mt-8 ml-10 mb-4 py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-white hover:bg-blue-800 "
      >
        {" "}
        Back Home
      </button>
      <div className="flex flex-col items-center justify-center w-screen">
        <SignUpForm></SignUpForm>
      </div>
      <h1>Sign Page woo hoo</h1>
      <h1>Footer goes here</h1>
    </div>
  );
}

export default SignUpPage;

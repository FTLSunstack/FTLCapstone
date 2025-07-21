import { useState } from "react";
import "../../../../tailwind.css";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import Footer from "../../../Common/Footer/Footer";

function SignUpPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="bg-gradient-to-r from-violet-600 to-blue-800">
        <button
          onClick={handleBack}
          className="mt-8 ml-10 py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-white hover:bg-black hover:text-white hover:cursor-pointer transition ease-in-out"
        >
          {" "}
          Back Home
        </button>
        <div className="flex flex-col justify-center opacity-90 min-h-screen h-14">
          <div>
            <div className="flex flex-col items-center justify-center w-screen flex-grow">
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;

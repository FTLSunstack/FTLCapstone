import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../tailwind.css";
import SignUpInput from "./SignUpInput";


function SignUpForm() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    };
    const goToLogin = ()=> {
        navigate("/login");
    };
    
    return (
        <div className="Sign Up Form bg-white bg-center flex flex-col items-center w-100 h-140 rounded-md "> 
            <div className="Title Header align-center">
                <div className="Title mt-10 mb-4 text-center text-violet-600 font-bold text-5xl">Codifica</div>
                <div className="Caption mb-6 text-center text-black font-bold text-xl">Welcome!</div>
            </div>
            <SignUpInput></SignUpInput>
            <container className= "flex flex-col items-left">
                <button onClick={handleBack} className="mt-6 mb-4 py-2 px-30 text-center font-semibold rounded-lg shadow-md text-white bg-indigo-700 hover:bg-blue-800 hover:cursor-pointer"> Sign Up</button>
            </container>
            <container className= "flex flex-row">
                <p className="text-xs text-gray-500"> Already have an account? </p>
                <p onClick={goToLogin} className="ml-3 text-xs text-gray-500 underline hover:text-indigo-500 hover:cursor-pointer"> Login Here</p>
            </container>
        </div>
    );
}

export default SignUpForm;

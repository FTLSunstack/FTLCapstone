import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../tailwind.css";


function GoogleAuthSignin() {
    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:3000/auth/google";
    };
    
    return (
        <button onClick={handleGoogleLogin} className="mt-4 px-4 py-2 font-semibold rounded-md shadow-md bg-red-300 text-white hover:bg-red-600 transition"> Sign in with Google </button>
    );

}

export default GoogleAuthSignin;
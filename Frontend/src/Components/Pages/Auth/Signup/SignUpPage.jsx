import { useState, useEffect } from "react";
import "../../../../tailwind.css";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import Footer from "../../../Common/Footer/Footer";

function SignUpPage({ language }) {
  const navigate = useNavigate();
  const [homeButtonTxt, setHomeButtonTxt] = useState("Volver Al Inicio");

  useEffect(() => {
    // only if language changes
    if (language === "Español") {
      setHomeButtonTxt("Volver Al Inicio");
    } else {
      setHomeButtonTxt("Back Home");
    }
  }, [language]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-700 via-violet-600 to-blue-600 flex flex-col">
        {/* Animated gradient waves */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-blue-500/20 animate-wave-1"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-blue-400/25 via-violet-400/20 to-pink-400/25 animate-wave-2"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/15 via-transparent to-purple-500/15 animate-wave-3"></div>
        </div>
        {/* Back Button */}
        <div className="p-6">
          <button
            onClick={handleBack}
            className="px-5 py-2 bg-white/20 text-white rounded-md shadow-md backdrop-blur-lg transition-all hover:bg-white/30 hover:scale-105 hover:shadow-lg border border-white/30"
          >
            {homeButtonTxt}
          </button>
        </div>

        {/* Centered Sign-Up Form */}
        <div className="flex-1 flex items-center justify-center px-4 z-100">
          <div className="w-full max-w-md">
            <SignUpForm language={language} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;

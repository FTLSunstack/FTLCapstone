import { useState, useEffect} from "react";
import "../../../../tailwind.css";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import Footer from "../../../Common/Footer/Footer";

function SignUpPage({language}) {
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
      <div className="min-h-screen bg-gradient-to-tl from-purple-700 via-violet-600 to-blue-600">
        <button
          onClick={handleBack}
          className="px-5 py-2 border border-white/40 text-white rounded-md hover:bg-white/20 backdrop-blur-md hover:cursor-pointer transition ease-in-out drop-shadow-lg m-10"
        >
          {" "}
          {homeButtonTxt}
        </button>
        <div>
          <div className="flex flex-col justify-center items-center mt-30">
            <SignUpForm language={language}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;

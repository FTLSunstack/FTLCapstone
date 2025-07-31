import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../tailwind.css";
import LoginForm from "./LoginForm";
import Footer from "../../../Common/Footer/Footer";

function LoginPage({language}) {
  console.log(language)
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
      <div className="min-h-screen h-14 bg-gradient-to-r from-violet-600 to-blue-800">
        <button
          onClick={handleBack}
          className="mt-8 ml-10 mb-8 py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-white hover:bg-black hover:text-white hover:cursor-pointer transition ease-in-out"
        >
          {" "}
          {homeButtonTxt}
        </button>
        <div className="flex flex-col opacity-100 items-center">
          <div className="mt-10">
            <div className="flex flex-col items-center justify-center w-screen mb-15">
              <LoginForm language={language}></LoginForm>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

import { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../tailwind.css";
import {NotifSuccess, NotifError} from "../../Common/ToastNotifs/ToastNotifs";

function PasswordModal({ email, setEmail, closePasswordModal, language}) {
  const [emailSent, setEmailState] = useState(false);
  const navigate = useNavigate();

  const [emailPlaceholder, setEmailPlaceholder] = useState("Ingrese su correo electrónico aquí");
  const [emailLabel, setEmailLabel] = useState("Correo electrónico");
  const [loginButtonTxt, setLoginButtonTxt] = useState( "Iniciar Sesión" );
  const [WelcomeTxt, setWelcomeTxt] = useState("¡Bienvenido de vuelta!");
  const [backLoginTxt, setBackLoginTxt] = useState("¡Jaja! He recordado mi contraseña!");


  useEffect(() => {
      // only if language changes
      if (language === "Español") {
        setEmailPlaceholder("Ingrese su correo electrónico aquí");
        setEmailLabel("Correo Electrónico")
        setLoginButtonTxt("Enviar Correo Electrónico")
        setWelcomeTxt("¿Olvidó su contraseña? ¡No se procupe!")
        setBackLoginTxt("¡Jaja! He recordado mi contraseña")
      } else {
        setEmailPlaceholder("Enter your email");
        setEmailLabel("Email")
        setLoginButtonTxt("Send Email");
        setBackLoginTxt("JK! I remember my password");
      }
  }, [language]); 

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/req-reset-password`,
        { email }
      );
      console.log("Reset Password Request successful!", response.data);
      NotifSuccess("Reset Password Request");
      // wait a little bit before navigating
      setTimeout(() => {
          navigate("/");
      }, 500);
      } catch (err) {
          NotifError("Reset Password Request",
              err.response?.data?.error ||
              err.response?.data?.message ||
              "Reset Password Request Failed"
          );
      }
  };
  return (
    <>
      <div
        onClick={closePasswordModal}
        className="bg-gradient-to-r from-violet-600 to-blue-800 fixed inset-0 flex items-center justify-center animation-fade-in transition-all duration-300"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="PasswordForm bg-white bg-center flex flex-col items-center justify-evenly w-100 h-140 rounded-md mb-35"
        >
          <div className="Title Header align-center">
            <div className="Title mt-10 mb-6 text-center text-violet-600 font-bold text-5xl">
              Codifica
            </div>
            <div className="Caption mb-6 text-center text-black font-bold text-xl">
              {WelcomeTxt}
            </div>
          </div>
          <div className="ResetInput flex flex-col items-center align-center items-center justify-center pb-10">
            <form onSubmit={handleForgotPassword} className="Input flex flex-col items-center align-center w-full mb-1">
              <div className="px-10 mb-4 w-full">
                <div className="Heading w-full mb-1 text-left text-black font-bold text-sm">
                  {emailLabel}:
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="p-1 w-80 border-content border-2 border-solid border-gray-300 rounded-md"
                  type="email"
                  placeholder={emailPlaceholder}
                  required
                />
              </div>
              <button
              type="submit"
              className="mb-4 py-2 px-8 text-center align-center items-center justify-center font-semibold rounded-lg shadow-md text-white bg-indigo-700 hover:bg-blue-800 cursor-pointer"
              >
                {" "}
                {loginButtonTxt}
              </button>
            </form>
          </div>
          <div>
            <p
              onClick={closePasswordModal}
              className="ml-3 text-xs text-gray-500 underline hover:text-indigo-500 hover:cursor-pointer p-9"
            >
              {" "}
              {backLoginTxt}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordModal;

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../tailwind.css";
import { NotifSuccess, NotifError } from "../../Common/ToastNotifs/ToastNotifs";

function PasswordModal({ email, setEmail, closePasswordModal, language }) {
  const [emailSent, setEmailState] = useState(false);
  const navigate = useNavigate();

  const [emailPlaceholder, setEmailPlaceholder] = useState(
    "Ingrese su correo electrónico aquí"
  );
  const [emailLabel, setEmailLabel] = useState("Correo electrónico");
  const [loginButtonTxt, setLoginButtonTxt] = useState("Iniciar Sesión");
  const [WelcomeTxt, setWelcomeTxt] = useState("¡Bienvenido de vuelta!");
  const [backLoginTxt, setBackLoginTxt] = useState(
    "¡Jaja! He recordado mi contraseña!"
  );

  useEffect(() => {
    // only if language changes
    if (language === "Español") {
      setEmailPlaceholder("Ingrese su correo electrónico aquí");
      setEmailLabel("Correo Electrónico");
      setLoginButtonTxt("Enviar Correo Electrónico");
      setWelcomeTxt("¿Olvidó su contraseña? ¡No se procupe!");
      setBackLoginTxt("¡Jaja! He recordado mi contraseña");
    } else {
      setEmailPlaceholder("Enter your email");
      setEmailLabel("Email");
      setLoginButtonTxt("Send Email");
      setBackLoginTxt("JK! I remember my password");
    }
  }, [language]);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/req-reset-password`,
        { email, language }
      );
      console.log("Reset Password Request successful!", response.data);
      NotifSuccess("Reset Password Request");
      // wait a little bit before navigating
      setTimeout(() => {
        navigate("/");
      }, 500);
    } catch (err) {
      NotifError(
        "Reset Password Request",
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
        className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-700 via-violet-600 to-blue-600 z-50"
      >
        {/* Animated gradient waves */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-blue-500/20 animate-wave-1"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-blue-400/25 via-violet-400/20 to-pink-400/25 animate-wave-2"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/15 via-transparent to-purple-500/15 animate-wave-3"></div>
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl shadow-lg w-[90%] max-w-md px-8 py-10 flex flex-col items-center z-100"
        >
          {/* Header */}
          <h1 className="text-violet-600 font-bold text-4xl mb-2">Codifica</h1>
          <h2 className="text-black font-semibold text-lg mb-6 text-center">
            {WelcomeTxt}
          </h2>

          {/* Form */}
          <form
            onSubmit={handleForgotPassword}
            className="w-full flex flex-col items-center"
          >
            <label
              htmlFor="email"
              className="w-full text-sm font-bold text-gray-700 mb-1"
            >
              {emailLabel}:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder={emailPlaceholder}
              className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <button
              type="submit"
              className="w-full py-2 bg-indigo-700 hover:bg-blue-800 text-white font-semibold rounded-md transition"
            >
              {loginButtonTxt}
            </button>
          </form>

          {/* Back to login */}
          <p
            onClick={closePasswordModal}
            className="mt-6 text-sm text-gray-500 underline hover:text-indigo-500 cursor-pointer"
          >
            {backLoginTxt}
          </p>
        </div>
      </div>
    </>
  );
}

export default PasswordModal;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../../tailwind.css";
import SignUpInput from "./SignUpInput";
import GoogleAuthSignin from "../googleAuthSignIn";
import {
  NotifSuccess,
  NotifError,
} from "../../../Common/ToastNotifs/ToastNotifs";
import { useAuth } from "../../../../Context/AuthContext";

function SignUpForm({ language }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [gotoLoginTxt, setgotoLoginTxt] = useState("Inicia tu sesión aquí");
  const [WelcomeTxt, setWelcomeTxt] = useState("¡Bienvenido!");
  const [AccountTxt, setAccountTxt] = useState("Ya eres miembro?");
  // this is the sign up button that actually registeres the user
  const [signupTxt, setSignupTxt] = useState("Crea tu cuenta");

  useEffect(() => {
    // only if language changes
    if (language === "Español") {
      setgotoLoginTxt("Inicia tu sesión aquí");
      setWelcomeTxt("¡Bienvenido!");
      setAccountTxt("Ya eres miembro?");
      setSignupTxt("Crea tu cuenta");
    } else {
      setgotoLoginTxt("Login Here");
      setWelcomeTxt("Welcome!");
      setAccountTxt("Already have an account?");
      setSignupTxt("Sign Up");
    }
  }, [language]);

  const handleBack = () => {
    navigate("/");
  };
  const goToLogin = () => {
    navigate("/login");
  };

  const userSignUp = async (e) => {
    // need to prevent the page from reloading
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/signup`,
        { username, password, email, name },
        { withCredentials: true }
      );
      console.log("SignUp successful!", response.data);
      NotifSuccess("SignUp");
      setUser(response.data.user);
      // wait a little bit before navigating
      setTimeout(() => {
        navigate("/ide");
      }, 500);
    } catch (err) {
      NotifError(
        "SignUp",
        err.response?.data?.error ||
          err.response?.data?.message ||
          "SignUp Failed"
      );
    }
  };
  return (
    <div className="bg-white rounded-xl shadow-lg px-4 py-6 w-full">
      <div className="text-center mb-6">
        <h1 className="text-violet-600 font-bold text-5xl mt-6 mb-4">
          Codifica
        </h1>
        <p className="text-black font-semibold text-xl">{WelcomeTxt}</p>
      </div>

      <form onSubmit={userSignUp} className="w-full flex flex-col items-center">
        <SignUpInput
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
          name={name}
          setName={setName}
          language={language}
        />
        <button
          type="submit"
          className="py-2 px-9 mt-2 text-white bg-indigo-700 hover:bg-blue-800 rounded-lg font-semibold transition self-center w-fit"
        >
          {signupTxt}
        </button>
      </form>

      <div className="flex justify-center items-center mt-4 text-sm text-gray-500">
        <span>{AccountTxt}</span>
        <button
          onClick={goToLogin}
          className="ml-2 underline hover:text-indigo-500 transition"
        >
          {gotoLoginTxt}
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;

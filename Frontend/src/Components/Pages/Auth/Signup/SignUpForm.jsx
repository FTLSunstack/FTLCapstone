import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../../tailwind.css";
import SignUpInput from "./SignUpInput";
import GoogleAuthSignin from "../googleAuthSignIn";
import {NotifSuccess, NotifError} from "../../../Common/ToastNotifs/ToastNotifs";
import { useAuth } from "../../../../Context/AuthContext";


function SignUpForm({language}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const [gotoLoginTxt, setgotoLoginTxt] = useState( "Inicia tu sesión aquí" );
    const [WelcomeTxt, setWelcomeTxt] = useState("¡Bienvenido!");
    const [AccountTxt, setAccountTxt] = useState("Ya eres miembro?");
    // this is the sign up button that actually registeres the user
    const [signupTxt, setSignupTxt] = useState( "Crea tu cuenta");

    useEffect(() => {
        // only if language changes
        if (language === "Español") {
            setgotoLoginTxt("Inicia tu sesión aquí")
            setWelcomeTxt("¡Bienvenido!")
            setAccountTxt("Ya eres miembro?")
            setSignupTxt("Crea tu cuenta")
        } else {
            setgotoLoginTxt("Login Here");
            setWelcomeTxt("Welcome!");
            setAccountTxt("Already have an account?")
            setSignupTxt("Sign Up")
        }
    }, [language]); 


    
    const handleBack = () => {
        navigate("/");
    };
    const goToLogin = ()=> {
        navigate("/login");
    };
    
    const userSignUp = async (e) => {
        // need to prevent the page from reloading
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, { username, password, email, name }, { withCredentials: true });
            console.log("SignUp successful!", response.data);
            NotifSuccess("SignUp");
            setUser(response.data.user);
            // wait a little bit before navigating
            setTimeout(() => {
                navigate("/ide");
            }, 500);
            } catch (err) {
                NotifError("SignUp",
                    err.response?.data?.error ||
                    err.response?.data?.message ||
                    "SignUp Failed"
                );
            }
    }
    return (
        <div className="Sign Up Form bg-white bg-center flex flex-col items-center w-110 h-150 rounded-md"> 
            <div className="Title Header align-center">
                <div className="Title mt-10 mb-4 text-center text-violet-600 font-bold text-5xl">Codifica</div>
                <div className="Caption mb-6 text-center text-black font-bold text-xl">{WelcomeTxt}</div>
            </div>
            <form onSubmit={userSignUp} className="Input flex flex-col items-center w-full">
                <SignUpInput username={username} setUsername={setUsername} password={password} setPassword={setPassword} email={email} setEmail={setEmail} name={name} setName={setName} language={language} ></SignUpInput>
                <div className= "flex flex-col items-left">
                    <button type="submit"  className="mt-6 mb-4 py-2 px-30 text-center font-semibold rounded-lg shadow-md text-white bg-indigo-700 hover:bg-blue-800 hover:cursor-pointer"> {signupTxt}</button>
                </div>
            </form>
            <div className= "flex flex-row">
                <p className="text-xs text-gray-500"> {AccountTxt} </p>
                <p onClick={goToLogin} className="ml-3 text-xs text-gray-500 underline hover:text-indigo-500 hover:cursor-pointer"> {gotoLoginTxt}</p>
            </div>
            {/* <GoogleAuthSignin></GoogleAuthSignin> */}
        </div>
    );
}

export default SignUpForm;

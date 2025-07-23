import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../../tailwind.css";
import LoginInput from "./LoginInput";
import PasswordModal from "../PasswordModal";
import { useAuth } from "../../../../Context/AuthContext";
import {toast, Bounce} from 'react-toastify';
import {NotifSuccess, NotifError} from "../../../Common/ToastNotifs/ToastNotifs";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [modalOpen, setModal] = useState(false);
    const { setUser } = useAuth();

    const navigate = useNavigate();

    const handleSignUp = ()=> {
        navigate("/signup");
    };
    
    const openPasswordModal = () => {
        setModal(true);
    }
    const closePasswordModal = () => {
        setEmail("");
        setModal(false);
    }
    const userLogin = async (e) => {
        // need to prevent the page from reloading
        e.preventDefault();
        try {
            console.log({ username, password })
            
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, { username, password }, { withCredentials: true });
            console.log("Login successful!", response.data);
            NotifSuccess("login");
            setUser(response.data.user);
            // wait a little bit before navigating
            setTimeout(() => {
                navigate("/ide");
            }, 500);
            } catch (err) {
                NotifError("login",
                    err.response?.data?.error ||
                    err.response?.data?.message ||
                    "Login Failed"
                );
            }
    }
    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:3000/auth/google";
    };
    
    // need it to show nothing
    let modalElement = null;
    // if it true then create/render that component
    if (modalOpen) {
        modalElement = <PasswordModal email={email} setEmail={setEmail} closePasswordModal={closePasswordModal} />;
    }

    
    return (
        <>
            <div className="LoginForm bg-white bg-center flex flex-col items-center w-100 h-140 rounded-md "> 
                <div className="Title Header align-center mb-4">
                    <div className="Title mt-10 mb-4 text-center text-violet-600 font-bold text-5xl">Codifica</div>
                    <div className="Caption mb-6 text-center text-black font-bold text-xl">Welcome Back!</div>
                </div>
                <form onSubmit={userLogin} className=" w-full flex flex-col items-center">
                    <LoginInput username={username} setUsername={setUsername} password={password} setPassword={setPassword} ></LoginInput>
                    <div className= " w-2/3 flex flex-col items-center justify-center align-center">
                        <p onClick = {openPasswordModal} className="mt-4 ml-1 text-center text-indigo-600 hover:text-purple-800 transition ease-in-out hover:cursor-pointer"> Forgot password?</p>
                        <button type="submit" className="mt-2 mb-4 py-2 px-9 text-center font-semibold rounded-lg shadow-md text-white bg-indigo-700 hover:bg-blue-800 cursor-pointer"> Log In</button>
                    </div>
                </form>
                <div className= "flex flex-row">
                    <p className="text-xs text-gray-500"> Don't have an account? </p>
                    <p onClick={handleSignUp} className="ml-3 text-xs text-gray-500 underline hover:text-indigo-500 hover:cursor-pointer"> Sign up for free</p>
                </div>
                {/* <button onClick={handleGoogleLogin} className="mt-4 px-4 py-2 font-semibold rounded-md shadow-md bg-red-300 text-white hover:bg-red-600 transition"> Sign in with Google </button> */}
            </div>
            {modalElement}
        </>
    );
}

export default LoginForm;

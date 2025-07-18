import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../../tailwind.css";
import SignUpInput from "./SignUpInput";
import GoogleAuthSignin from "../googleAuthSignIn";

function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();
    
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
            const response = await axios.post("http://localhost:3000/auth/signup", { username, password, email, name }, { withCredentials: true });
            console.log("Login successful!", response.data);
            navigate("/ide");
            } catch (err) {
                alert(
                    err.response?.data?.error ||
                    err.response?.data?.message ||
                    "Signup Failed"
                );
            }
    }
    return (
        <div className="Sign Up Form bg-white bg-center flex flex-col items-center w-110 h-160 rounded-md "> 
            <div className="Title Header align-center">
                <div className="Title mt-10 mb-4 text-center text-violet-600 font-bold text-5xl">Codifica</div>
                <div className="Caption mb-6 text-center text-black font-bold text-xl">Welcome!</div>
            </div>
            <form onSubmit={userSignUp} className="Input flex flex-col items-center w-full">
                <SignUpInput username={username} setUsername={setUsername} password={password} setPassword={setPassword} email={email} setEmail={setEmail} name={name} setName={setName} ></SignUpInput>
                <div className= "flex flex-col items-left">
                    <button type="submit"  className="mt-6 mb-4 py-2 px-30 text-center font-semibold rounded-lg shadow-md text-white bg-indigo-700 hover:bg-blue-800 hover:cursor-pointer"> Sign Up</button>
                </div>
            </form>
            <div className= "flex flex-row">
                <p className="text-xs text-gray-500"> Already have an account? </p>
                <p onClick={goToLogin} className="ml-3 text-xs text-gray-500 underline hover:text-indigo-500 hover:cursor-pointer"> Login Here</p>
            </div>
            {/* <GoogleAuthSignin></GoogleAuthSignin> */}
        </div>
    );
}

export default SignUpForm;

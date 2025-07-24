import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../tailwind.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function SignUpInput({username, setUsername,password,setPassword, email, setEmail, name, setName}) {  
    const [icon, setIcon] = useState(FaRegEyeSlash);
    const [passwordType, setPasswordType] = useState("password")
    
    const showPassword = () => {
        if (passwordType === "password"){
            setIcon(FaRegEye);
            setPasswordType("text");
        }
        else {
            setIcon(FaRegEyeSlash);
            setPasswordType("password");
        }
    } 
    
    return (
        <>
        <div className="px-10 mb-3 w-full">
            <div className="Heading mb-1 text-left text-black font-bold text-sm">Full Name:</div>
            <input id="name" value={name} onChange={(e) => setName(e.target.value)}  className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="text" placeholder="Enter your name" required/>
        </div>
        <div className="px-10 mb-3 w-full">
            <div className="Heading mb-1 text-left text-black font-bold text-sm">Username:</div>
            <input id="username" value={username} onChange={(e) => setUsername(e.target.value)}  className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="text" placeholder="Enter your username" required/>
        </div>
        <div className="px-10 mb-3 w-full">
            <div className="Heading mb-1 text-left text-black font-bold text-sm">Email:</div>
            <input id="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="email" placeholder="Enter your email" required/>
        </div>
        <div className="px-10 mb-3 w-full">
            <div className="Heading mb-1 text-left text-black font-bold text-sm">Password:</div>
            <div className="relative w-full">
                <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type= {passwordType} placeholder="Enter your password" required/>
                <span id = "passwordToggle" className="password-toggle absolute inset-y-1/4 right-2 cursor-pointer text-gray-500 hover:cursor-pointer" onClick={showPassword} >
                    {icon}
                </span>
            </div>
        </div>
        </>
    );
}

export default SignUpInput;

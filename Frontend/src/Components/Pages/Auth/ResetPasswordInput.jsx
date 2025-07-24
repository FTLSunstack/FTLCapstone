import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../tailwind.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


function ResetPasswordInput({password,setPassword}) {   
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
            <div className=" mb-3 w-full">
                <div className="Heading mb-1 text-left text-black font-bold text-sm">New Password:</div>
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

export default ResetPasswordInput;

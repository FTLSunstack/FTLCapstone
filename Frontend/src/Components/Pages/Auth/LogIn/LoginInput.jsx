import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../tailwind.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function LoginInput({username, setUsername,password,setPassword, language}) {   
    const [usernamePlaceholder, setUsernamePlaceholder] = useState("Ingresa su usuario aquí");
    const [usernameLabel, setUsernameLabel] = useState("Usuario");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Ingrese su contraseña aquí");
    const [passwordLabel, setpasswordLabel] = useState("Contraseña");
    
    useEffect(() => {
        // only if language changes
        if (language === "Español") {
            setUsernamePlaceholder("Ingrese su usuario aquí");
            setUsernameLabel("Usuario")
            setPasswordPlaceholder("Ingrese su contraseña aquí")
            setpasswordLabel("Contraseña")
        } else {
            setUsernamePlaceholder("Enter your username");
            setUsernameLabel("Username:")
            setPasswordPlaceholder("Enter your password")
            setpasswordLabel("Password")
        }
    }, [language]); 

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
            <div className="px-10 mb-5 w-full">
                <div className="Heading mb-1 text-left text-black font-bold text-sm">{usernameLabel}:</div>
                <input value={username} onChange={(e) => setUsername(e.target.value)} id="username" className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="text" placeholder={usernamePlaceholder} required/>
            </div>
            <div className="px-10 mb-3 w-full">
                <div className="Heading mb-1 text-left text-black font-bold text-sm">{passwordLabel}:</div>
                <div className="relative w-full">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type= {passwordType} placeholder={passwordPlaceholder} required/>
                    <span id = "passwordToggle" className="password-toggle absolute inset-y-1/4 right-2 cursor-pointer text-gray-500 hover:cursor-pointer" onClick={showPassword} >
                        {icon}
                    </span>
                </div>
            </div>
        </>
    );
}

export default LoginInput;

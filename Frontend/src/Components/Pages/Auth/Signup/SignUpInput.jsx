import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../tailwind.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function SignUpInput({username, setUsername,password,setPassword, email, setEmail, name, setName, language}) {  
    const [fullNamePlaceholder, setFullNamePlaceholder] = useState("Ingrese su nombre aquí");
    const [fullNameLabel, setFullNameLabel] = useState("Nombre");
    const [usernamePlaceholder, setUsernamePlaceholder] = useState("Ingrese su usuario aquí");
    const [usernameLabel, setUsernameLabel] = useState("Usuario");
    const [emailPlaceholder, setEmailPlaceholder] = useState("Ingrese su correo electrónico aquí");
    const [emailLabel, setEmailLabel] = useState("Correo electrónico");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("Ingrese su contraseña aquí");
    const [passwordLabel, setpasswordLabel] = useState("Contraseña");
    
    useEffect(() => {
        // only if language changes
        if (language === "Español") {
            setFullNamePlaceholder("Ingrese su nombre aquí");
            setFullNameLabel("Nombre")
            setUsernamePlaceholder("Ingrese su usuario aquí");
            setUsernameLabel("Usuario")
            setEmailPlaceholder("Ingrese su correo electrónico aquí");
            setEmailLabel("Correo electrónico")
            setPasswordPlaceholder("Ingrese su contraseña aquí")
            setpasswordLabel("Contraseña")
        } else {
            setFullNamePlaceholder("Enter your name");
            setFullNameLabel("Full Name")
            setUsernamePlaceholder("Enter your username");
            setUsernameLabel("Username")
            setEmailPlaceholder("Enter your email");
            setEmailLabel("Email")
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
        <div className="px-10 mb-3 w-full">
            <div className="Heading mb-1 text-left text-black font-bold text-sm">{fullNameLabel}:</div>
            <input id="name" value={name} onChange={(e) => setName(e.target.value)}  className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="text" placeholder={fullNamePlaceholder} required/>
        </div>
        <div className="px-10 mb-3 w-full">
            <div className="Heading mb-1 text-left text-black font-bold text-sm">{usernameLabel}:</div>
            <input id="username" value={username} onChange={(e) => setUsername(e.target.value)}  className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="text" placeholder={usernamePlaceholder} required/>
        </div>
        <div className="px-10 mb-3 w-full">
            <div className="Heading mb-1 text-left text-black font-bold text-sm">{emailLabel}:</div>
            <input id="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="email" placeholder={emailPlaceholder} required/>
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

export default SignUpInput;

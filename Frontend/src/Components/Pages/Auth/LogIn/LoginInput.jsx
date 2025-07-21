import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../tailwind.css";

function LoginInput({username, setUsername,password,setPassword}) {   
    

    return (
        <>
            <div className="px-10 mb-5 w-full">
                <div className="Heading mb-1 text-left text-black font-bold text-sm">Username:</div>
                <input value={username} onChange={(e) => setUsername(e.target.value)} id="username" className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="text" placeholder="Enter your username" required/>
            </div>
            <div className="px-10 mb-3 w-full">
                <div className="Heading mb-1 text-left text-black font-bold text-sm">Password:</div>
                <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="password" placeholder="Enter your password" required/>
            </div>
        </>
    );
}

export default LoginInput;

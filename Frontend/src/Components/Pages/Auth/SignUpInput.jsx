import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../tailwind.css";

function SignUpInput({username, setUsername,password,setPassword, email, setEmail, name, setName}) {   
    
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
            <input id="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="password" placeholder="Enter your password" required/>
        </div>
        </>
    );
}

export default SignUpInput;

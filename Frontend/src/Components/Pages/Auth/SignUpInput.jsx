import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../tailwind.css";


function SignUpInput() {   
    return (
        <form className="Input flex flex-col items-center w-full">
            <div className="px-10 mb-3 w-full">
                <div className="Heading mb-1 text-left text-black font-bold text-sm">Full Name:</div>
                <input id="name" className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="text" placeholder="Enter your name" required/>
            </div>
            <div className="px-10 mb-3 w-full">
                <div className="Heading mb-1 text-left text-black font-bold text-sm">Username:</div>
                <input id="username" className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="text" placeholder="Enter your username" required/>
            </div>
            <div className="px-10 mb-3 w-full">
                <div className="Heading mb-1 text-left text-black font-bold text-sm">Email:</div>
                <input id="email" className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="email" placeholder="Enter your email" required/>
            </div>
            <div className="px-10 mb-3 w-full">
                <div className="Heading mb-1 text-left text-black font-bold text-sm">Password:</div>
                <input id="password" className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="password" placeholder="Enter your password" required/>
            </div>
        </form>
    );
}

export default SignUpInput;

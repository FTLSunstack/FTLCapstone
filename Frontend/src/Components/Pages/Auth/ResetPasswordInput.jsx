import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../tailwind.css";

function ResetPasswordInput({password,setPassword}) {   

    return (
        <form className="Input flex flex-col items-center w-full">
            <div className="px-10 mb-3 w-full">
                <div className="Heading mb-1 text-left text-black font-bold text-sm">Password:</div>
                <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="password" placeholder="Enter your password" required/>
            </div>
        </form>
    );
}

export default ResetPasswordInput;

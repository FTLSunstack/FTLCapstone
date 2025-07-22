import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../tailwind.css";

function ResetPasswordInput({password,setPassword}) {   

    return (
        <>
            <div className=" mb-3 w-full">
                <div className="Heading mb-1 text-left text-black font-bold text-sm">New Password:</div>
                <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="p-1 w-full border-2 border-solid border-gray-300 rounded-md" type="password" placeholder="Enter your password" required/>
            </div>
        </>
    );
}

export default ResetPasswordInput;

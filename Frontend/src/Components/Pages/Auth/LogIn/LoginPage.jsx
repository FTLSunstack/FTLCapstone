import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../tailwind.css";
import LoginForm from "./LoginForm";
import Footer from "../../../Common/Footer/Footer";

function LoginPage() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/");
    };

    return (
        <>
            <div className="flex flex-col opacity-90 min-h-screen h-14 items-center bg-gradient-to-r from-violet-600 to-blue-800">
                <div>
                    <button onClick={handleBack} className="mt-8 ml-10 mb-8 py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-white hover:bg-black hover:text-white hover:cursor-pointer"> Back Home</button>
                    <div className="flex flex-col items-center justify-center w-screen mb-35">
                        <LoginForm></LoginForm>
                    </div>
                </div>
                <div className="mt-auto w-full">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default LoginPage;

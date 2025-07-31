import { useState, useEffect } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import "../../../tailwind.css";
import axios from "axios";
import Footer from "../../Common/Footer/Footer";
import ResetPasswordInput from "./ResetPasswordInput";
import { NotifError, NotifSuccess } from "../../Common/ToastNotifs/ToastNotifs";

function ResetPasswordPage() {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    // Get token from URL
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");
    //need to get the language
    const urlLanguage = searchParams.get("lang");

    const [pageTxt, setPageTxt] = useState("Por favor, restablezca su contraseña aquí.");
    const [buttonTxt, setButtonTxt] = useState("Actualice su Contraseña");


    useEffect(() => {
        // only if language changes
        if (urlLanguage === "Español") {
            setPageTxt("Por favor, restablezca su contraseña aquí.");
            setButtonTxt("Actualice su Contraseña");
        } else {
            setButtonTxt("Update Password");
        }
    }, [urlLanguage]); 
    

    const handleBack = () => {
        navigate("/login");
    };
    const handleUpdateForgottenPassword = async (e) => {
        e.preventDefault();
        try {
            console.log("Reset token:", token);
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/reset-password`, { token, newPassword: password });
            console.log("Reset Password successful!", response.data);
            NotifSuccess("Reset Password");
            setTimeout(() => {
                navigate("/login");
            }, 500);
        } catch(err){
            NotifError("Reset Password",
                err.response?.data?.error ||
                err.response?.data?.message ||
                "Reset Password Failed"
            );
        }
    }

    return (
        <>
            <div className="flex flex-col opacity-90 min-h-screen h-14 items-center bg-gradient-to-r from-violet-600 to-blue-800">
                <div>
                    <button onClick={handleBack} className="mt-8 ml-10 mb-8 py-2 px-4 font-semibold rounded-lg shadow-md text-black bg-white hover:bg-black hover:text-white hover:cursor-pointer"> Back to Login</button>
                    <div className="flex flex-col items-center justify-center w-screen mb-35">
                        <div className="PasswordFrom bg-white bg-center flex flex-col items-center justify-around w-100 h-140 rounded-md"> 
                            <div className="Title Header align-center">
                                <div className="Title mt-10 mb-4 text-center text-violet-600 font-bold text-5xl">Codifica</div>
                                <div className="Caption mb-6 text-center text-black font-bold text-xl">{pageTxt}</div>
                            </div>

                            <form onSubmit={handleUpdateForgottenPassword} className="Input flex flex-col items-center pb-30 px-10 w-full" >
                                <ResetPasswordInput password={password} setPassword={setPassword} language={urlLanguage} ></ResetPasswordInput>
                                <div className= "flex flex-col items-left">
                                    <button type="submit" className="mt-2 mb-4 py-2 px-15 text-center font-semibold rounded-lg shadow-md text-white bg-indigo-700 hover:bg-blue-800 cursor-pointer"> {buttonTxt}</button>
                                </div>
                            </form>
                            {/* <div className= "flex flex-row">
                                <p className="text-xs text-gray-500"> Didn't get an email? </p>
                                <p  className="ml-3 text-xs text-gray-500 underline hover:text-indigo-500 hover:cursor-pointer"> Resend Email</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResetPasswordPage;

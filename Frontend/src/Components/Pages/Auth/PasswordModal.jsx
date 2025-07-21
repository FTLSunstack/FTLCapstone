import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../../tailwind.css";

function PasswordModal({ email, setEmail, closePasswordModal }) {
  const [emailSent, setEmailState] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/req-reset-password",
        { email }
      );
      console.log("Reset Password Request successful!", response.data);
      navigate("/login");
    } catch (err) {
      alert(
        err.response?.data?.error ||
          err.response?.data?.message ||
          "Request failed"
      );
    }
  };
  return (
    <>
      <div
        onClick={closePasswordModal}
        className="bg-gradient-to-r from-violet-600 to-blue-800 fixed inset-0 flex items-center justify-center animation-fade-in transition-all duration-300"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="PasswordForm bg-white bg-center flex flex-col items-center justify-evenly w-100 h-140 rounded-md mb-35"
        >
          <div className="Title Header align-center">
            <div className="Title mt-10 mb-6 text-center text-violet-600 font-bold text-5xl">
              Codifica
            </div>
            <div className="Caption mb-6 text-center text-black font-bold text-xl">
              Forgot your password? No worries!
            </div>
          </div>
          <div className="ResetInput flex flex-col items-center align-center items-center justify-center pb-10">
            <form className="Input flex flex-col items-center align-center w-full mb-1">
              <div className="px-10 mb-4 w-full">
                <div className="Heading mb-1 text-left text-black font-bold text-sm">
                  Email:
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="px-15 w-full border-2 border-solid border-gray-300 rounded-md"
                  type="email"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <button
              onSubmit={handleForgotPassword}
              className="mb-4 py-2 px-10 text-center align-center items-center justify-center font-semibold rounded-lg shadow-md text-white bg-indigo-700 hover:bg-blue-800 cursor-pointer"
              >
                {" "}
                Get Reset Email
              </button>
            </form>
          </div>
          <div>
            <p
              onClick={closePasswordModal}
              className="ml-3 text-xs text-gray-500 underline hover:text-indigo-500 hover:cursor-pointer p-9"
            >
              {" "}
              JK! I remember my password.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordModal;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../tailwind.css";
import { useAuth } from "../../../Context/AuthContext";
import { toast, Bounce } from "react-toastify";

function NavBar({ language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const logOutNotifSuccess = () =>
    toast.warning("You have logged out", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const handleUserLogout = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );
      console.log("LogOut successful!", response.data);
      logOutNotifSuccess();
      setTimeout(() => {
        navigate("/");
      }, 100);
      setUser(null);
    } catch (err) {
      alert(
        err.response?.data?.error ||
          err.response?.data?.message ||
          "Logout Failed"
      );
    }
  };

  const handleChangeLanguage = () => {
    if (language === "English") {
      setLanguage("Español");
    } else {
      setLanguage("English");
    }
  };

  const handleGlossaryClick = () => {
    navigate("/glossary");
  };

  const handleIdeClick = () => {
    navigate("/ide");
  };

  const handleBackToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      {language === "English" ? (
        <div>
          <div className="bg-white p-5 md:grid md:grid-cols-3 items-center border-b border-black shadow-md">
            <div className="flex flex-row justify-between">
              <h1
                className="text-violet-600 font-bold text-3xl hover:cursor-pointer hover:opacity-70 transition ease-in-out"
                onClick={handleBackToHomePage}
              >
                Codifica
              </h1>

              <div className="flex flex-row gap-8">
                <button
                  onClick={handleChangeLanguage}
                  className="md:hidden bg-violet-500 px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-violet-700 transition ease-in-out"
                >
                  {language === "Español" ? "English" : "Español"}
                </button>
                {/* Hamburger Icon (visible only on mobile) */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden block focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 text-violet-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="hidden md:flex flex-row justify-center gap-10">
              <a
                onClick={handleIdeClick}
                className="text-lg text-gray-500 hover:text-black transition ease-in-out cursor-pointer text-center"
              >
                IDE
              </a>
              <a
                onClick={handleGlossaryClick}
                className="text-lg text-gray-500 hover:text-black transition ease-in-out cursor-pointer text-center"
              >
                Glossary
              </a>
            </div>

            <div className="hidden md:flex flex-row space-x-5 justify-self-end">
              <button
                onClick={handleChangeLanguage}
                className="bg-violet-500 px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-violet-700 transition ease-in-out"
              >
                {language}
              </button>
              <button
                onClick={handleUserLogout}
                className="px-5 py-2 outline outline-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white hover:cursor-pointer transition ease-in-out"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Dropdown Menu for Mobile */}
          {isOpen && (
            <div className="md:hidden flex flex-col align-center gap-4 px-5 py-4 bg-white/10 backdrop-blur-md text-white absolute top-[80px] left-0 right-0 z-40 shadow-lg">
              <a
                onClick={handleIdeClick}
                className="text-white hover:cursor-pointer text-center"
              >
                IDE
              </a>
              <a
                onClick={handleGlossaryClick}
                className="text-white hover:cursor-pointer text-center"
              >
                Glossary
              </a>
              <button
                onClick={handleUserLogout}
                className="px-4 py-2 rounded-md bg-violet-500 text-white hover:cursor-pointer"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="bg-white p-5 md:grid md:grid-cols-3 items-center border-b border-black shadow-md">
            <div className="flex flex-row justify-between">
              <h1
                className="text-violet-600 font-bold text-3xl hover:cursor-pointer hover:opacity-70 transition ease-in-out mr-4"
                onClick={handleBackToHomePage}
              >
                Codifica
              </h1>

              <div className="flex flex-row gap-8">
                <button
                  onClick={handleChangeLanguage}
                  className="md:hidden bg-violet-500 px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-violet-700 transition ease-in-out"
                >
                  {language === "Español" ? "English" : "Español"}
                </button>
                {/* Hamburger Icon (visible only on mobile) */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden block focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 text-violet-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="hidden md:flex flex-row justify-center gap-10">
              <a
                onClick={handleIdeClick}
                className="text-lg text-gray-500 hover:text-black transition ease-in-out cursor-pointer text-center"
              >
                IDE
              </a>
              <a
                onClick={handleGlossaryClick}
                className="text-lg text-gray-500 hover:text-black transition ease-in-out cursor-pointer text-center"
              >
                Glosario
              </a>
            </div>

            <div className="hidden md:flex flex-row space-x-5 justify-self-end">
              <button
                onClick={handleChangeLanguage}
                className="bg-violet-500 px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-violet-700 transition ease-in-out ml-4"
              >
                {language}
              </button>
              <button
                onClick={handleUserLogout}
                className="px-5 py-2 outline outline-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white hover:cursor-pointer transition ease-in-out"
              >
                Finalizar Sesión
              </button>
            </div>
          </div>

          {/* Dropdown Menu for Mobile */}
          {isOpen && (
            <div className="md:hidden flex flex-col align-center gap-4 px-5 py-4 bg-white/10 backdrop-blur-md text-white absolute top-[80px] left-0 right-0 z-40 shadow-lg">
              <a
                onClick={handleIdeClick}
                className="text-white hover:cursor-pointer text-center"
              >
                IDE
              </a>
              <a
                onClick={handleGlossaryClick}
                className="text-white hover:cursor-pointer text-center"
              >
                Glosario
              </a>
              <button
                onClick={handleUserLogout}
                className="px-4 py-2 rounded-md bg-violet-500 text-white hover:cursor-pointer"
              >
                Finalizar Sesión
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default NavBar;

import "../../../../tailwind.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../../Context/AuthContext.jsx";
import React, { useState } from "react";
import { toast, Bounce } from "react-toastify";

export default function HomeNavBar({
  language,
  setLanguage,
  onScrollToFeatures,
  onScrollToAboutUs,
  onScrollToGetStarted,
  setLastPage,
}) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { setUser } = useAuth();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleIDE = () => {
    setLastPage("ide");
    navigate("/ide");
  };
  const handleProfilePage = () => {
    setLastPage("home");
    navigate("/profile");
  };
  const handleChangeLanguage = () => {
    if (language === "English") {
      setLanguage("Español");
    } else {
      setLanguage("English");
    }
  };

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

  return (
    <>
      {language === "Español" ? (
        <div>
          <div className="absolute top-0 left-0 right-0 z-50 p-5 xl:grid xl:grid-cols-3 items-center bg-transparent backdrop-blur-sm">
            <div className="flex flex-row justify-between">
              <h1 className="text-white font-bold text-3xl hover:cursor-pointer hover:opacity-70 transition ease-in-out drop-shadow-lg">
                Codifica
              </h1>

              <div className="flex flex-row gap-8">
                <button
                  onClick={handleChangeLanguage}
                  className="xl:hidden px-5 py-2 bg-white/20 text-white rounded-md shadow-md backdrop-blur-lg transition-all hover:cursor-pointer hover:bg-white/30 hover:scale-105 hover:shadow-lg border border-white/30"
                >
                  {language === "Español" ? "English" : "Español"}
                </button>
                {/* Hamburger Icon (visible only on mobile) */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="xl:hidden block focus:outline-none"
                >
                  <svg
                    className={`w-8 h-8 ${
                      isOpen
                        ? "text-violet-400 hover:text-violet-200"
                        : "text-violet-200 hover:text-violet-400"
                    }`}
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

            {user ? (
              <div className="hidden xl:flex flex-row gap-10 justify-center">
                <button
                  onClick={onScrollToFeatures}
                  className="text-lg text-white hover:opacity-50 transition ease-in-out cursor-pointer drop-shadow-md transition hover:scale-105"
                >
                  Características
                </button>
                <button
                  onClick={onScrollToAboutUs}
                  className="text-lg text-white hover:opacity-50 transition ease-in-out cursor-pointer drop-shadow-md transition hover:scale-105"
                >
                  Sobre Nosotros
                </button>
                <button
                  className="text-lg text-white hover:opacity-50 transition ease-in-out cursor-pointer drop-shadow-md transition hover:scale-105"
                  onClick={handleIDE}
                >
                  Aprender
                </button>
              </div>
            ) : (
              <div className="hidden xl:flex flex-row gap-10 justify-center">
                <button
                  onClick={onScrollToFeatures}
                  className="text-lg text-white hover:opacity-70 transition ease-in-out cursor-pointer drop-shadow-md transition hover:scale-105"
                >
                  Características
                </button>
                <button
                  onClick={onScrollToAboutUs}
                  className="text-lg text-white hover:opacity-70 transition ease-in-out cursor-pointer drop-shadow-md transition hover:scale-105"
                >
                  Sobre Nosotros
                </button>
                <button
                  onClick={onScrollToGetStarted}
                  className="text-lg text-white hover:opacity-70 transition ease-in-out cursor-pointer drop-shadow-md transition hover:scale-105"
                >
                  Comenzar
                </button>
              </div>
            )}

            <div className="hidden xl:flex flex-row space-x-5 justify-self-end">
              <button
                onClick={handleChangeLanguage}
                className="px-5 py-2 bg-white/20 text-white rounded-md shadow-md backdrop-blur-lg transition-all hover:cursor-pointer hover:bg-white/30 hover:scale-105 hover:shadow-lg border border-white/30"
              >
                {language === "Español" ? "English" : "Español"}
              </button>

              {user ? (
                <div className="flex flex-row space-x-5">
                  <button
                    onClick={handleUserLogout}
                    className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-white/30 transition-all hover:scale-105 hover:shadow-lg ease-in-out border border-white/30 drop-shadow-lg"
                  >
                    Logout
                  </button>
                  <span>
                    <img
                      src="https://adamchang.com/wp-content/uploads/2022/05/Tokyo-Olympics_Astro-Statics_large__Medal-Pose-1.png"
                      alt="pfp"
                      className="w-10 cursor-pointer drop-shadow-lg rounded-full"
                      onClick={handleProfilePage}
                    />
                  </span>
                </div>
              ) : (
                <div className="hidden xl:flex space-x-5">
                  <button
                    onClick={handleLogin}
                    className="px-5 py-2 border border-white/40 text-white rounded-md hover:bg-white/20 backdrop-blur-md hover:cursor-pointer transition-all hover:scale-105 hover:shadow-lg ease-in-out drop-shadow-lg"
                  >
                    Iniciar Sesión
                  </button>
                  <button
                    onClick={handleSignUp}
                    className="px-5 py-2 bg-white/20 text-white rounded-md shadow-md backdrop-blur-lg transition-all hover:cursor-pointer hover:bg-white/30 hover:scale-105 hover:shadow-lg border border-white/30"
                  >
                    Registrarse
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Dropdown Menu for Mobile */}
          {isOpen && (
            <div className="xl:hidden flex flex-col items-center gap-4 px-5 py-4 bg-white/10 backdrop-blur-md text-white absolute top-[80px] left-0 right-0 z-40 shadow-lg">
              {user ? (
                <>
                  <button onClick={onScrollToFeatures}>Características</button>
                  <button onClick={onScrollToAboutUs}>Sobre Nosotros</button>
                  <button onClick={handleIDE}>Aprender</button>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                    alt="pfp"
                    className="w-10 rounded-full cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
                    onClick={handleProfilePage}
                  />
                  <button
                    onClick={handleUserLogout}
                    className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-white/30 transition-all hover:scale-105 hover:shadow-lg ease-in-out border border-white/30 drop-shadow-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button onClick={onScrollToFeatures}>Características</button>
                  <button onClick={onScrollToAboutUs}>Sobre Nosotros</button>
                  <button onClick={onScrollToGetStarted}>Comenzar</button>
                  <button onClick={handleLogin}>Iniciar Sesión</button>
                  <button onClick={handleSignUp}>Registrarse</button>
                </>
              )}
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="absolute top-0 left-0 right-0 z-50 p-5 xl:grid xl:grid-cols-3 items-center bg-transparent backdrop-blur-sm">
            <div className="flex flex-row justify-between">
              <h1 className="text-white font-bold text-3xl hover:cursor-pointer hover:opacity-70 transition ease-in-out drop-shadow-lg">
                Codifica
              </h1>

              <div className="flex flex-row gap-8">
                <button
                  onClick={handleChangeLanguage}
                  className="xl:hidden px-5 py-2 bg-white/20 text-white rounded-md shadow-md backdrop-blur-lg transition-all hover:cursor-pointer hover:bg-white/30 hover:scale-105 hover:shadow-lg border border-white/30"
                >
                  {language === "Español" ? "English" : "Español"}
                </button>
                {/* Hamburger Icon (visible only on mobile) */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="xl:hidden block focus:outline-none"
                >
                  <svg
                    className={`w-8 h-8 ${
                      isOpen
                        ? "text-violet-400 hover:text-violet-200"
                        : "text-violet-200 hover:text-violet-400"
                    }`}
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

            {user ? (
              <div className="hidden xl:flex flex-row gap-10 justify-center">
                <button
                  onClick={onScrollToFeatures}
                  className="text-lg text-white hover:opacity-70 cursor-pointer drop-shadow-md cursor-pointer transition hover:scale-105"
                >
                  Features
                </button>
                <button
                  onClick={onScrollToAboutUs}
                  className="text-lg text-white hover:opacity-70 transition ease-in-out cursor-pointer drop-shadow-md cursor-pointer transition hover:scale-105"
                >
                  About Us
                </button>
                <button
                  onClick={handleIDE}
                  className="text-lg text-white hover:opacity-70 transition ease-in-out cursor-pointer drop-shadow-md cursor-pointer transition hover:scale-105"
                >
                  Learn
                </button>
              </div>
            ) : (
              <div className="hidden xl:flex flex-row gap-10 justify-center">
                <button
                  onClick={onScrollToFeatures}
                  className="text-lg text-white hover:opacity-70 drop-shadow-md cursor-pointer transition hover:scale-105"
                >
                  Features
                </button>
                <button
                  onClick={onScrollToAboutUs}
                  className="text-lg text-white hover:opacity-70 transition ease-in-out drop-shadow-md cursor-pointer transition hover:scale-105"
                >
                  About Us
                </button>
                <button
                  onClick={onScrollToGetStarted}
                  className="text-lg text-white hover:opacity-70 transition ease-in-out drop-shadow-md cursor-pointer transition hover:scale-105"
                >
                  Get Started
                </button>
              </div>
            )}
            <div className="hidden xl:flex flex-row space-x-5 justify-self-end">
              <button
                onClick={handleChangeLanguage}
                className="px-5 py-2 bg-white/20 text-white rounded-md shadow-md backdrop-blur-lg transition-all hover:cursor-pointer hover:bg-white/30 hover:scale-105 hover:shadow-lg border border-white/30"
              >
                {language === "English" ? "Español" : "English"}
              </button>
              {user ? (
                <div className="flex flex-row space-x-5">
                  <button
                    onClick={handleUserLogout}
                    className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-white/30 transition-all hover:scale-105 hover:shadow-lg ease-in-out border border-white/30 drop-shadow-lg"
                  >
                    Logout
                  </button>
                  <span>
                    <img
                      src="https://adamchang.com/wp-content/uploads/2022/05/Tokyo-Olympics_Astro-Statics_large__Medal-Pose-1.png"
                      alt="pfp"
                      className="w-20 cursor-pointer drop-shadow-lg rounded-full transition-all hover:scale-105 hover:shadow-lg"
                      onClick={handleProfilePage}
                    />
                  </span>
                </div>
              ) : (
                <div className="hidden xl:flex space-x-5">
                  <button
                    onClick={handleLogin}
                    className="px-5 py-2 border border-white/40 text-white rounded-md hover:bg-white/20 backdrop-blur-md hover:cursor-pointer transition-all hover:scale-105 hover:shadow-lg ease-in-out drop-shadow-lg"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={handleSignUp}
                    className="px-5 py-2 bg-white/20 text-white rounded-md shadow-md backdrop-blur-lg transition-all hover:cursor-pointer hover:bg-white/30 hover:scale-105 hover:shadow-lg border border-white/30"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Dropdown Menu for Mobile */}
          {isOpen && (
            <div className="xl:hidden flex flex-col items-center gap-4 px-5 py-4 bg-white/10 backdrop-blur-md text-white absolute top-[80px] left-0 right-0 z-40 shadow-lg">
              {user ? (
                <>
                  <button onClick={onScrollToFeatures}>Features</button>
                  <button onClick={onScrollToAboutUs}>About Us</button>
                  <button onClick={handleIDE}>Learn</button>
                  <img
                    src="https://adamchang.com/wp-content/uploads/2022/05/Tokyo-Olympics_Astro-Statics_large__Medal-Pose-1.png"
                    alt="pfp"
                    className="w-10 rounded-full cursor-pointer transition hover:scale-105 hover:shadow-lg"
                    onClick={handleProfilePage}
                  />
                  <button
                    onClick={handleUserLogout}
                    className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-white/30 transition-all hover:scale-105 hover:shadow-lg ease-in-out border border-white/30 drop-shadow-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button onClick={onScrollToFeatures}>Features</button>
                  <button onClick={onScrollToAboutUs}>About Us</button>
                  <button onClick={onScrollToGetStarted}>Get Started</button>
                  <button onClick={handleLogin}>Sign In</button>
                  <button onClick={handleSignUp}>Sign Up</button>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}

import "../../../../tailwind.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext.jsx";
import React, { useState } from "react";

export default function HomeNavBar({
  language,
  setLanguage,
  onScrollToFeatures,
  onScrollToAboutUs,
  onScrollToGetStarted,
}) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleIDE = () => {
    navigate("/ide");
  };
  const handleProfilePage = () => {
    navigate("/profile");
  };
  const handleChangeLanguage = () => {
    if (language === "English") {
      setLanguage("Español");
    } else {
      setLanguage("English");
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
                  className="xl:hidden bg-white/20 backdrop-blur-md px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-white/30 transition ease-in-out border border-white/30 drop-shadow-lg"
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
                  className="text-lg text-white hover:opacity-50 transition ease-in-out cursor-pointer drop-shadow-md"
                >
                  Características
                </button>
                <button
                  onClick={onScrollToAboutUs}
                  className="text-lg text-white hover:opacity-50 transition ease-in-out cursor-pointer drop-shadow-md"
                >
                  Sobre Nosotros
                </button>
                <button
                  className="text-lg text-white hover:opacity-50 transition ease-in-out cursor-pointer drop-shadow-md"
                  onClick={handleIDE}
                >
                  IDE
                </button>
              </div>
            ) : (
              <div className="hidden xl:flex flex-row gap-10 justify-center">
                <button
                  onClick={onScrollToFeatures}
                  className="text-lg text-white hover:opacity-70 transition ease-in-out cursor-pointer drop-shadow-md"
                >
                  Características
                </button>
                <button
                  onClick={onScrollToAboutUs}
                  className="text-lg text-white hover:opacity-70 transition ease-in-out cursor-pointer drop-shadow-md"
                >
                  Sobre Nosotros
                </button>
                <button
                  onClick={onScrollToGetStarted}
                  className="text-lg text-white hover:opacity-70 transition ease-in-out cursor-pointer drop-shadow-md"
                >
                  Comenzar
                </button>
              </div>
            )}

            <div className="hidden xl:flex flex-row space-x-5 justify-self-end">
              <button
                onClick={handleChangeLanguage}
                className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-white/30 transition ease-in-out border border-white/30 drop-shadow-lg"
              >
                {language === "Español" ? "English" : "Español"}
              </button>

              {user ? (
                <span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                    alt="pfp"
                    className="w-10 cursor-pointer drop-shadow-lg rounded-full"
                    onClick={handleProfilePage}
                  />
                </span>
              ) : (
                <div className="hidden xl:flex space-x-5">
                  <button
                    onClick={handleLogin}
                    className="px-5 py-2 border border-white/40 text-white rounded-md hover:bg-white/20 backdrop-blur-md hover:cursor-pointer transition ease-in-out drop-shadow-lg"
                  >
                    Iniciar Sesión
                  </button>
                  <button
                    onClick={handleSignUp}
                    className="px-5 py-2 bg-white/20 backdrop-blur-md text-white rounded-md border border-white/30 hover:bg-white/30 hover:cursor-pointer transition ease-in-out drop-shadow-lg"
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
                  <button onClick={handleIDE}>IDE</button>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                    alt="pfp"
                    className="w-10 rounded-full cursor-pointer"
                    onClick={handleProfilePage}
                  />
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
                  className="xl:hidden bg-white/20 backdrop-blur-md px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-white/30 transition ease-in-out border border-white/30 drop-shadow-lg"
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
                  className="text-lg text-white hover:opacity-70 cursor-pointer drop-shadow-md cursor-pointer"
                >
                  Features
                </button>
                <button
                  onClick={onScrollToAboutUs}
                  className="text-lg text-white hover:opacity-70 transition ease-in-out cursor-pointer drop-shadow-md cursor-pointer"
                >
                  About Us
                </button>
                <button
                  onClick={handleIDE}
                  className="text-lg text-white hover:opacity-70 transition ease-in-out cursor-pointer drop-shadow-md cursor-pointer"
                >
                  IDE
                </button>
              </div>
            ) : (
              <div className="hidden xl:flex flex-row gap-10 justify-center">
                <button
                  onClick={onScrollToFeatures}
                  className="text-lg text-white hover:opacity-70 drop-shadow-md cursor-pointer"
                >
                  Features
                </button>
                <button
                  onClick={onScrollToAboutUs}
                  className="text-lg text-white hover:opacity-70 transition ease-in-out drop-shadow-md cursor-pointer"
                >
                  About Us
                </button>
                <button
                  onClick={onScrollToGetStarted}
                  className="text-lg text-white hover:opacity-70 transition ease-in-out drop-shadow-md cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            )}
            <div className="hidden xl:flex flex-row space-x-5 justify-self-end">
              <button
                onClick={handleChangeLanguage}
                className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-white/30 transition ease-in-out border border-white/30 drop-shadow-lg"
              >
                {language === "English" ? "Español" : "English"}
              </button>
              {user ? (
                <span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                    alt="pfp"
                    className="w-10 cursor-pointer drop-shadow-lg rounded-full"
                    onClick={handleProfilePage}
                  />
                </span>
              ) : (
                <div className="hidden xl:flex space-x-5">
                  <button
                    onClick={handleLogin}
                    className="px-5 py-2 border border-white/40 text-white rounded-md hover:bg-white/20 backdrop-blur-md hover:cursor-pointer transition ease-in-out drop-shadow-lg"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={handleSignUp}
                    className="px-5 py-2 bg-white/20 backdrop-blur-md text-white rounded-md border border-white/30 hover:bg-white/30 hover:cursor-pointer transition ease-in-out drop-shadow-lg"
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
                  <button onClick={handleIDE}>IDE</button>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
                    alt="pfp"
                    className="w-10 rounded-full cursor-pointer"
                    onClick={handleProfilePage}
                  />
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

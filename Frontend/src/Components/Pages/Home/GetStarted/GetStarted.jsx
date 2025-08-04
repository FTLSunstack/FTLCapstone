import { useNavigate, useSearchParams } from "react-router-dom";
import "../../../../tailwind.css";
import { useAuth } from "../../../../Context/AuthContext.jsx";
import { useEffect, useState } from "react";

function GetStarted({ language }) {
  const [userInfo, setUserInfo] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signup");
  };

  useEffect(() => {
    if (user) {
      setUserInfo(user);
    }
  }, [user]);

  const handleLearnToday = () => {
    navigate("/ide");
  };

  return (
    <>
      {language === "Español" ? (
        <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-r from-purple-700 to-blue-600 px-8 py-20 sm:p-20 overflow-x-hidden">
          <h1 className="text-white text-4xl font-bold pb-8 text-center px-10">
            ¿Listo para programar?
          </h1>
          <h2 className="text-white text-2xl text-center">
            Únete a nuestra plataforma y aprende a programar sin límites de
            idioma.
          </h2>
          {!user ? (
            <button
              onClick={handleSignUp}
              className="mt-8 bg-white text-lg font-bold px-6 py-3 rounded-lg shadow-lg outline-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white hover:cursor-pointer transition-all hover:scale-105 hover:shadow-lg ease-in-out"
            >
              Comienza Ahora
            </button>
          ) : (
            <button
              onClick={handleLearnToday}
              className="mt-8 bg-white text-lg font-bold px-6 py-3 rounded-lg shadow-lg outline-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white hover:cursor-pointer transition-all hover:scale-105 hover:shadow-lg ease-in-out"
            >
              Aprende Hoy
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-r from-purple-700 to-blue-600 px-8 py-20 sm:p-20 overflow-x-hidden">
          <h1 className="text-white text-4xl font-bold pb-8 text-center px-10">
            Ready to Code?
          </h1>
          <h2 className="text-white text-2xl text-center">
            Join our platform and learn to code without language barriers.
          </h2>
          {!user ? (
            <button
              onClick={handleSignUp}
              className="mt-8 bg-white text-lg font-bold px-6 py-3 rounded-lg shadow-lg outline-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white hover:cursor-pointer transition-all hover:scale-105 hover:shadow-lg ease-in-out"
            >
              Get Started Now
            </button>
          ) : (
            <button
              onClick={handleLearnToday}
              className="mt-8 bg-white text-lg font-bold px-6 py-3 rounded-lg shadow-lg outline-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white hover:cursor-pointer transition-all hover:scale-105 hover:shadow-lg ease-in-out"
            >
              Start Learning Today
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default GetStarted;

import { useNavigate } from "react-router-dom";
import "../../../../tailwind.css";

function GetStarted({ language }) {
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      {language === "Español" ? (
        <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-20 sm:p-20">
          <h1 className="text-white text-4xl font-bold pb-8 text-center">
            ¿Listo para programar?
          </h1>
          <h2 className="text-white text-2xl text-center">
            Únete a nuestra plataforma y aprende a programar sin límites de
            idioma.
          </h2>
          <button
            onClick={handleSignUp}
            className="mt-8 bg-white text-lg font-bold px-6 py-3 rounded-lg shadow-lg outline-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white hover:cursor-pointer transition ease-in-out"
          >
            Comienza Ahora
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-20 sm:p-20">
          <h1 className="text-white text-4xl font-bold pb-8 text-center">
            Ready to Code?
          </h1>
          <h2 className="text-white text-2xl text-center">
            Join our platform and learn to code without language barriers.
          </h2>
          <button
            onClick={handleSignUp}
            className="mt-8 bg-white text-lg font-bold px-6 py-3 rounded-lg shadow-lg outline-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white hover:cursor-pointer transition ease-in-out"
          >
            Get Started Now
          </button>
        </div>
      )}
    </>
  );
}

export default GetStarted;

import { useState } from "react";
import "../../../../tailwind.css";

function GetStarted() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-r from-blue-500 to-purple-500 p-20">
        <h1 className="text-white text-4xl font-bold pb-8 text-center">
          ¿Listo para programar?
        </h1>
        <h2 className="text-white text-2xl text-center">
          Únete a nuestra plataforma y aprende a programar sin límites de
          idioma.
        </h2>
        <button className="mt-8 bg-white text-lg font-bold px-6 py-3 rounded-lg shadow-lg outline-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white hover:cursor-pointer transition ease-in-out">
          Comienza Ahora
        </button>
      </div>
    </>
  );
}

export default GetStarted;

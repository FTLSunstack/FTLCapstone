import { useState } from "react";
import "../../../../tailwind.css";

function Intro({ language }) {
  return (
    <>
      {language === "Español" ? (
        <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-r from-purple-500 to-blue-500 p-25">
          <h1 className="text-white text-5xl font-bold pb-8 text-center">
            Aprenda a Programar en Español!
          </h1>
          <h2 className="text-white text-2xl text-center">
            Rompe la barrera del idioma en la programación. Obtén explicaciones,
            traducciones y asistencia de IA en tiempo real mientras codificas!
          </h2>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-r from-purple-500 to-blue-500 p-25">
          <h1 className="text-white text-5xl font-bold pb-8 text-center">
            Learn to Code in English!
          </h1>
          <h2 className="text-white text-2xl text-center">
            Break the language barrier in programming. Get explanations,
            translations, and AI assistance in real-time as you code!
          </h2>
        </div>
      )}
    </>
  );
}

export default Intro;

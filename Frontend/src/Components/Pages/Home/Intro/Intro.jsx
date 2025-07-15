import { useState } from "react";
import "../../../../tailwind.css";

function Intro() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen bg-gradient-to-r from-purple-500 to-blue-500 p-20">
        <h1 className="text-white text-5xl font-bold pb-8 text-center">
          Aprenda a Programar en Español!
        </h1>
        <h2 className="text-white text-2xl text-center">
          Rompe la barrera del idioma en la programación. Obtén explicaciones,
          traducciones y asistencia de IA en tiempo real mientras codificas!
        </h2>
      </div>
    </>
  );
}

export default Intro;

import { useState } from "react";
import "../../../../tailwind.css";

function Features() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen bg-gray-50 p-20">
        <h1 className="text-black text-4xl font-bold pb-8 text-center">
          Porque Codifica?
        </h1>
        <h2 className="text-gray-500 text-2xl text-center">
          Entendemos que aprender a codificar no debe estar limitado por el
          idioma. Nuestra plataforma hace que la programación sea accesible para
          todos, independientemente de su dominio del inglés.
        </h2>
        <div className="flex flex-row justify-center m-10"></div>
      </div>
    </>
  );
}

export default Features;

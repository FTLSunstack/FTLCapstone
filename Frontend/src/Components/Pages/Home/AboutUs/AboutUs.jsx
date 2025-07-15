import { useState } from "react";
import "../../../../tailwind.css";
import CreatorCard from "../CreatorCard/CreatorCard.jsx";
import Mission from "../Mission/Mission.jsx";

function AboutUs() {
  return (
    <>
      <Mission />
      <div className="flex flex-col items-center justify-center w-screen bg-gray-50 p-20">
        <h1 className="text-black text-4xl font-bold pb-8 text-center">
          Conoce a Nuestro Equipo
        </h1>
        <h2 className="text-gray-500 text-xl text-center px-20">
          Somos un equipo apasionado de desarrolladores y educadores
          comprometidos con hacer que la programación sea accesible para todos.
          Creemos en el poder del aprendizaje inclusivo y en la importancia de
          eliminar las barreras lingüísticas en la educación tecnológica.
        </h2>
        <div className="flex flex-row justify-center mt-10">
          <CreatorCard
            name="Joanna Echeverri Porras"
            description="Desarrolladora Full Stack"
            img=""
          />
          <CreatorCard
            name="Luis-Angel Moreno"
            description="Desarrollador Full Stack"
            img=""
          />
          <CreatorCard
            name="Heiryn Hernandez Rojas"
            description="Desarrolladora Full Stack"
            img=""
          />
        </div>
      </div>
    </>
  );
}

export default AboutUs;

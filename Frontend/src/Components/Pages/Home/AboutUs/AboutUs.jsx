import { useState } from "react";
import "../../../../tailwind.css";
import CreatorCard from "../CreatorCard/CreatorCard.jsx";
import Mission from "../Mission/Mission.jsx";

import luispicture from "../../../../assets/luis-picture.JPG";
import joannapicture from "../../../../assets/joanna-picture.JPG";
import heirynpicture from "../../../../assets/heiryn-picture.jpg";

function AboutUs({ language }) {
  const luisLink = "https://www.linkedin.com/in/luisanm/";
  const heirynLink = "https://www.linkedin.com/in/heirynhr/";
  const joannaLink = "https://www.linkedin.com/in/joanna-ep/";

  return (
    <>
      {language === "Español" ? (
        <div>
          <Mission language={language} />
          <div className="flex flex-col items-center justify-center w-full bg-gray-50 p-20">
            <h1 className="text-black text-4xl font-bold pb-8 text-center">
              Conoce a Nuestro Equipo
            </h1>
            <h2 className="text-gray-500 text-xl text-center max-w-5xl">
              Somos un equipo apasionado de desarrolladores y educadores
              comprometidos con hacer que la programación sea accesible para
              todos. Creemos en el poder del aprendizaje inclusivo y en la
              importancia de eliminar las barreras lingüísticas en la educación
              tecnológica.
            </h2>
            <div className="flex flex-wrap justify-center mt-10">
              <CreatorCard
                name="Joanna Echeverri Porras"
                description="Desarrolladora Full Stack"
                img={joannapicture}
                linkedin={joannaLink}
              />
              <CreatorCard
                name="Luis-Angel Moreno"
                description="Desarrollador Full Stack"
                img={luispicture}
                linkedin={luisLink}
              />
              <CreatorCard
                name="Heiryn Hernandez Rojas"
                description="Desarrolladora Full Stack"
                img={heirynpicture}
                linkedin={heirynLink}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Mission language={language} />
          <div className="flex flex-col items-center justify-center w-full bg-gray-50 p-20">
            <h1 className="text-black text-4xl font-bold pb-8 text-center">
              Meet Our Team
            </h1>
            <h2 className="text-gray-500 text-xl text-center max-w-5xl">
              We are a passionate team of developers and educators committed to
              making programming accessible for everyone. We believe in the
              power of inclusive learning and the importance of breaking down
              language barriers in tech education.
            </h2>
            <div className="flex flex-wrap justify-center mt-10">
              <CreatorCard
                name="Joanna Echeverri Porras"
                description="Full Stack Developer"
                img={joannapicture}
                linkedin={joannaLink}
              />
              <CreatorCard
                name="Luis-Angel Moreno"
                description="Full Stack Developer"
                img={luispicture}
                linkedin={luisLink}
              />
              <CreatorCard
                name="Heiryn Hernandez Rojas"
                description="Full Stack Developer"
                img={heirynpicture}
                linkedin={heirynLink}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AboutUs;

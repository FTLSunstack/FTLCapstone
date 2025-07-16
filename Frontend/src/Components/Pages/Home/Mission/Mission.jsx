import { useState } from "react";
import "../../../../tailwind.css";

function Mission({ language }) {
  return (
    <>
      {language === "Español" ? (
        <div className="flex flex-col items-center justify-center w-screen bg-[#011939] p-20">
          <h1 className="text-white text-4xl font-bold pb-8 text-center">
            Nuestra Misión
          </h1>
          <h2 className="text-gray-300 text-xl text-center px-20">
            En Codifica, nuestra misión es hacer que la programación sea
            accesible para todos, sin importar el idioma. Creemos que el
            aprendizaje de la programación no debe estar limitado por barreras
            lingüísticas. Por eso, ofrecemos una plataforma que proporciona
            recursos, herramientas y asistencia en múltiples idiomas,
            permitiendo a los usuarios aprender y practicar la programación de
            manera efectiva y sin obstáculos.
          </h2>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-screen bg-[#011939] p-20">
          <h1 className="text-white text-4xl font-bold pb-8 text-center">
            Our Mission
          </h1>
          <h2 className="text-gray-300 text-xl text-center px-20">
            At Codifica, our mission is to make programming accessible for
            everyone, regardless of language. We believe that learning to code
            should not be limited by language barriers. That's why we provide a
            platform that offers resources, tools, and support in multiple
            languages, enabling users to learn and practice programming
            effectively and without obstacles.
          </h2>
        </div>
      )}
    </>
  );
}

export default Mission;

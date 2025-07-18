import { useState } from "react";
import "../../../../tailwind.css";

function GlossaryDescription({ language }) {
  return (
    <>
      {language === "Español" ? (
        <div className="flex flex-col items-center justify-center p-15 bg-gradient-to-r from-purple-500 to-blue-500 text-white w-screen">
          <h1 className="text-4xl font-bold text-center">Glosario</h1>
          <h2 className="text-xl font-semibold text-center mt-5">
            Busca y explora conceptos de programación con traducciones en tu
            idioma nativo. Domina la terminología de codificación en diferentes
            idiomas.
          </h2>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-15 bg-gradient-to-r from-purple-500 to-blue-500 text-white w-screen">
          <h1 className="text-4xl font-bold text-center">Glossary</h1>
          <h2 className="text-xl font-semibold text-center mt-5">
            Search and explore programming concepts with translations in your
            native language. Master coding terminology across different
            languages.
          </h2>
        </div>
      )}
    </>
  );
}

export default GlossaryDescription;

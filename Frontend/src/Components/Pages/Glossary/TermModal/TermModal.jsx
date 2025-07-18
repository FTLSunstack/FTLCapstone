import { useState } from "react";
import "../../../../tailwind.css";

function TermModal({ language, onClose, term }) {
  return (
    <>
      {language === "Español" ? (
        <div
          onClick={onClose}
          className="bg-[rgba(0,0,0,0.5)] fixed inset-0 flex items-center justify-center animation-fade-in transition-all duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white flex flex-col items-center justify-center text-center rounded-lg p-8 shadow-lg min-w-[300px] max-w-lg"
          >
            <h1 className="text-black font-bold text-2xl">
              {term.translation}
            </h1>
            <h2 className="text-xl">Traducción: {term.term}</h2>
            <p className="text-gray-700 text-lg">{term.definition_es}</p>
            <p className="text-black text-lg">
              Ejemplo: <br />
              {term.example_es}
            </p>
          </div>
        </div>
      ) : (
        <div
          onClick={onClose}
          className="bg-[rgba(0,0,0,0.5)] fixed inset-0 flex items-center justify-center animation-fade-in transition-all duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg p-8 shadow-lg min-w-[300px] max-w-lg"
          >
            <h1 className="text-blue-500">{term.term}</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default TermModal;

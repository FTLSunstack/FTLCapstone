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
            className="bg-white flex flex-col items-center justify-center text-center rounded-lg p-16 shadow-lg"
          >
            <h1 className="text-black font-bold text-2xl">
              {term.translation}
            </h1>
            <h2 className="text-xl my-4">Traducción: {term.term}</h2>
            <p className="text-gray-700 text-lg my-4">{term.definition_es}</p>
            <div className="text-black text-lg bg-gray-300 p-4 rounded-lg my-4 min-w-100">
              <p className="font-bold text-purple-700">Ejemplo en Python:</p>
              <p className="bg-gray-100 p-2 rounded-lg mt-4">
                {term.example_es}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={onClose}
          className="bg-[rgba(0,0,0,0.5)] fixed inset-0 flex items-center justify-center animation-fade-in transition-all duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white flex flex-col items-center justify-center text-center rounded-lg p-16 shadow-lg"
          >
            <h1 className="text-black font-bold text-2xl">{term.term}</h1>
            <h2 className="text-xl my-4">Translation: {term.translation}</h2>
            <p className="text-gray-700 text-lg my-4">{term.definition_en}</p>
            <div className="text-black text-lg bg-gray-300 p-4 rounded-lg my-4 min-w-100">
              <p className="font-bold text-purple-700">Example in Python:</p>
              <p className="bg-gray-100 p-2 rounded-lg mt-4">
                {term.example_en}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TermModal;

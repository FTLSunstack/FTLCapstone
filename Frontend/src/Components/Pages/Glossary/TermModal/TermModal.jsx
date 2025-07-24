import { useState } from "react";
import ReactMarkdown from "react-markdown";
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
            className="bg-white flex flex-col items-center justify-center text-center rounded-lg p-16 shadow-lg max-w-3/5"
          >
            {term.es == null ? (
              <div>
                <h1 className="text-xl text-black font-bold">{term.en.term}</h1>
                <p className="text-gray-700 text-lg mt-4">
                  Sorry this term is not available in Spanish yet.
                </p>
              </div>
            ) : (
              <div>
                <h1 className="text-black font-bold text-2xl">
                  {term.es.term}
                </h1>
                <h2 className="text-xl my-4">Traducción: {term.en.term}</h2>
                <div className="text-gray-700 text-lg my-4">
                  <ReactMarkdown>{term.es.def}</ReactMarkdown>
                </div>
                <div className="text-black text-lg bg-gray-300 p-4 rounded-lg my-4 min-w-100">
                  <p className="font-bold text-purple-700">
                    Ejemplo en Python:
                  </p>
                  <p className="bg-gray-100 p-2 rounded-lg mt-4">
                    {term.example_es}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          onClick={onClose}
          className="bg-[rgba(0,0,0,0.5)] fixed inset-0 flex items-center justify-center animation-fade-in transition-all duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white flex flex-col items-center justify-center text-center rounded-lg p-16 shadow-lg max-w-3/5"
          >
            <h1 className="text-black font-bold text-2xl">{term.en.term}</h1>
            {term.es == null ? (
              <h2 className="text-xl my-4">
                Sorry this term is not available in Spanish yet.
              </h2>
            ) : (
              <h2 className="text-xl my-4">Translation: {term.es.term}</h2>
            )}
            <div className="text-gray-700 text-lg my-4">
              <ReactMarkdown>{term.en.def}</ReactMarkdown>
            </div>
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

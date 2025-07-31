import { useState } from "react";
import "../../../../tailwind.css";

function Term({ term, language, onClick, setModalTerm }) {
  const lang = language === "Español" ? "es" : "en";
  //bg-violet-200 hover:bg-violet-500
  return (
    <>
      <div
        onClick={() => {
          setModalTerm(term);
          console.log(term);
          onClick();
        }}
        className="bg-purple-500 hover:bg-purple-700 px-10 py-5 shadow-2xl rounded-lg text-center flex items-center justify-center hover:cursor-pointer hover:shadow-3xl hover:scale-105 transition-all duration-300"
      >
        <h1 className="text-xl text-white font-semibold">
          {term?.[lang]?.term}
        </h1>
      </div>
    </>
  );
}

export default Term;

import { useState } from "react";
import "../../../../tailwind.css";

function Term({ term, language, onClick, setModalTerm }) {
  const lang = language === "Español" ? "es" : "en";
  //bg-violet-200 hover:bg-violet-500
  return (
    <div
      onClick={() => {
        setModalTerm(term);
        console.log(term);
        onClick();
      }}
      className="relative group bg-gradient-to-br from-purple-500 to-blue-500 p-6 rounded-xl shadow-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
    >
      {/* Subtle animated glow border */}
      <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-white/30 transition-all duration-300 pointer-events-none"></div>

      {/* Glowing dot */}
      <div className="absolute top-3 left-3 h-3 w-3 bg-white/80 rounded-full shadow-md animate-pulse z-10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start pt-3">
        <h1 className="text-white text-xl font-bold tracking-wide leading-tight">
          {term?.[lang]?.term}
        </h1>
      </div>

      {/* Inner glow on hover */}
      <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-5 transition duration-300 pointer-events-none"></div>
    </div>
  );
}

export default Term;

import { useState } from "react";
import "../../../../tailwind.css";

function IDEDescription({ language }) {
  return (
    <>
      {language === "Español" ? (
        <div className="relative flex flex-col items-center justify-center p-15 pt-30 md:pt-33 bg-gradient-to-br from-purple-700 via-violet-600 to-blue-600 text-white w-screen">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-blue-500/20 animate-wave-1"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-blue-400/25 via-violet-400/20 to-pink-400/25 animate-wave-2"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/15 via-transparent to-purple-500/15 animate-wave-3"></div>
          </div>
          <h1 className="text-4xl font-bold text-center z-10">
            Entorno de Desarrollo Integrado (IDE)
          </h1>
          <h2 className="text-xl font-semibold text-center mt-5 z-10">
            Escribe y ejecuta código con resultados instantáneos. Obtén
            explicaciones impulsadas por IA y retroalimentación en vivo para
            mejorar la estructura, el estilo y la eficiencia.
          </h2>
          {/* Floating code elements */}
          <div className="absolute top-28 left-6 lg:left-12 text-purple-200/30 font-mono text-sm rotate-12">
            {"{ AI }"}
          </div>
          <div className="absolute bottom-10 right-6 lg:right-12 text-purple-200/30 font-mono text-sm -rotate-12">
            {"</code>"}
          </div>
        </div>
      ) : (
        <div className="relative flex flex-col items-center justify-center p-15 pt-30 md:pt-33 bg-gradient-to-br from-purple-700 via-violet-600 to-blue-600 text-white w-screen">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-blue-500/20 animate-wave-1"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-blue-400/25 via-violet-400/20 to-pink-400/25 animate-wave-2"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/15 via-transparent to-purple-500/15 animate-wave-3"></div>
          </div>
          <h1 className="text-4xl font-bold text-center z-10">
            Integrated Development Environment (IDE)
          </h1>
          <h2 className="text-xl font-semibold text-center mt-5 z-10">
            Write and run code with instant results. Get AI-powered explanations
            of your code and live feedback to help improve structure, style, and
            efficiency.
          </h2>
          {/* Floating code elements */}
          <div className="absolute top-28 left-6 lg:left-12 text-purple-200/30 font-mono text-sm rotate-12">
            {"{ AI }"}
          </div>
          <div className="absolute bottom-10 right-6 lg:right-12 text-purple-200/30 font-mono text-sm -rotate-12">
            {"</code>"}
          </div>
        </div>
      )}
    </>
  );
}

export default IDEDescription;

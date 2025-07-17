import React from "react";
import "../../../../tailwind.css";

export default function CodeOutput({ language, output, error, loading }) {
  console.log("Language", language);
  console.log("Output", output);
  console.log("Error", error);
  console.log("loading", loading);
  return (
    <div>
      {language === "English" ? (
        <div className="bg-zinc-900 h-100 w-[800px] m-8 p-5 rounded-lg">
          <h1 className="text-white font-bold">Output</h1>

          <div className="mt-5">
            {loading ? (
              <p className="text-yellow-400">Running your code</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <p className="text-green-400">{output}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-zinc-900 h-100 w-[800px] m-8 p-5 rounded-lg">
          <h1 className="text-white font-bold">Salida</h1>

          <div className="mt-5">
            {loading ? (
              <p className="text-yellow-400">Ejecutando tu código</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <p className="text-green-400">{output}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

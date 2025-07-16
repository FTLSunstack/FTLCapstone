import React from "react";
import "../../../../tailwind.css";

export default function CodeOutput({ language }) {
  return (
    <div>
      {language === "English" ? (
        <div className="bg-zinc-900 h-100 w-[800px] m-8 p-5 rounded-lg">
          <h1 className="text-white font-bold">Output</h1>
        </div>
      ) : (
        <div className="bg-zinc-900 h-100 w-[800px] m-8 p-5 rounded-lg">
          <h1 className="text-white font-bold">Salida</h1>
        </div>
      )}
    </div>
  );
}

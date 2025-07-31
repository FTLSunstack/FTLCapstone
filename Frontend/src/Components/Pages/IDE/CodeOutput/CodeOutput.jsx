import React from "react";
import "../../../../tailwind.css";
import { useState } from "react";

export default function CodeOutput({
  language,
  output,
  error,
  loading,
  onInputChange,
}) {
  // console.log("Language", language);
  // console.log("Output", output);
  // console.log("Error", error);
  // console.log("loading", loading);

  const [activeButton, setActiveButton] = useState("button1");
  const [input, setInput] = useState("");

  const handleButton1 = () => {
    setActiveButton("button1");
  };

  const handleButton2 = () => {
    setActiveButton("button2");
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <div>
      {language === "English" ? (
        <div className="bg-zinc-900 w-full max-w-[900px] h-[400px] max-h-[500px] rounded-lg mx-auto shadow-4xl">
          <div className="flex gap-1 bg-zinc-800 rounded-lg p-1">
            <button
              onClick={handleButton1}
              className={`py-2 px-5 cursor-pointer rounded-sm flex justify-center gap-2 transition ${
                activeButton === "button1"
                  ? "bg-zinc-600 text-green-500 border-b-4 border-green-500"
                  : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              <span class="material-icons">code</span>
              Output
            </button>
            <button
              onClick={handleButton2}
              className={`py-2 px-5 cursor-pointer rounded-sm flex justify-center gap-2 transition ${
                activeButton == "button2"
                  ? "bg-zinc-600 text-sky-400 border-b-4 border-sky-400"
                  : "text-white bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              <span className="material-icons">input</span>
              Input
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[250px] max-h-[400px] overflow-y-auto">
            {activeButton === "button1" ? (
              <div className="p-4">
                {loading ? (
                  <div className="flex items-center gap-3 p-4">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-400"></div>
                    <p className="text-yellow-400">Running your code...</p>
                  </div>
                ) : error ? (
                  <div className="bg-red-900/20 border border-red-500 rounded p-4">
                    <h2 className="text-red-400 font-semibold mb-2">Error:</h2>
                    <p className="text-red-300 font-mono text-sm">{error}</p>
                  </div>
                ) : output && output.trim() !== "" ? (
                  <div className="bg-green-900/20 border border-green-500 rounded p-4 mt-2">
                    <h2 className="text-green-400 font-semibold mb-3">
                      Output:
                    </h2>
                    <pre className="text-green-300 font-mono text-sm whitespace-pre-wrap leading-relaxed">
                      {output}
                    </pre>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20">
                    <span className="material-icons text-6xl text-gray-500 mb-4">
                      code_off
                    </span>
                    <h1 className="text-gray-400 text-lg text-center">
                      No output yet. Run your code to see results here.
                    </h1>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col h-full">
                <textarea
                  value={input}
                  placeholder="Enter your code here..."
                  className="bg-zinc-900 text-white placeholder-gray-400 w-full h-full rounded-b-lg p-4 border-0 outline-none resize-none rounded-none font-mono leading-relaxed"
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-zinc-900 w-full max-w-[900px] h-[400px] max-h-[500px] rounded-lg mx-auto">
          <div className="flex gap-1 bg-zinc-800 rounded-lg p-1">
            <button
              onClick={handleButton1}
              className={`py-2 px-5 cursor-pointer rounded-sm flex justify-center gap-2 transition ${
                activeButton === "button1"
                  ? "bg-zinc-600 text-green-500 border-b-4 border-green-500"
                  : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              <span className="material-icons">code</span>
              Producción
            </button>
            <button
              onClick={handleButton2}
              className={`py-2 px-5 cursor-pointer rounded-sm flex flex-row justify-center gap-2 ${
                activeButton == "button2"
                  ? "bg-zinc-600 text-sky-400 border-b-4 border-sky-400"
                  : "text-white bg-zinc-800 hover:bg-zinc-700"
              }`}
            >
              <span className="material-icons">input</span>
              Aporte
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[250px] max-h-[400px] overflow-y-auto">
            {activeButton === "button1" ? (
              <div className="p-4">
                {loading ? (
                  <div className="flex items-center gap-3 p-4">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-400"></div>
                    <p className="text-yellow-400">Ejecutando tu código...</p>
                  </div>
                ) : error ? (
                  <div className="bg-red-900/20 border border-red-500 rounded p-4">
                    <h2 className="text-red-400 font-semibold mb-2">Error:</h2>
                    <p className="text-red-300 font-mono text-sm">{error}</p>
                  </div>
                ) : output && output.trim() !== "" ? (
                  <div className="bg-green-900/20 border border-green-500 rounded p-4 mt-2">
                    <h2 className="text-green-400 font-semibold mb-3">
                      Producción:
                    </h2>
                    <pre className="text-green-300 font-mono text-sm whitespace-pre-wrap leading-relaxed">
                      {output}
                    </pre>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20">
                    <span className="material-icons text-6xl text-gray-500 mb-4">
                      code_off
                    </span>
                    <h1 className="text-gray-400 text-lg text-center">
                      Aún no hay resultados. Ejecuta tu código para ver los
                      resultados aquí.
                    </h1>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col h-full">
                <textarea
                  value={input}
                  placeholder="Enter your code here..."
                  className="bg-zinc-900 text-white placeholder-gray-400 w-full h-full rounded-b-lg p-4 border-0 outline-none resize-none rounded-none font-mono leading-relaxed"
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

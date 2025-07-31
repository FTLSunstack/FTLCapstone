import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "../../../../tailwind.css";
import axios from "axios";

function TermModal({ language, onClose, term }) {
  const [exampleTerm, setExampleTerm] = useState("");
  const [exampleLoading, setExampleLoading] = useState(false);

  const refreshExample = async (term) => {
    console.log(term.en.term);
    try {
      setExampleLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/explainer/refreshExampleTerm`,
        {
          term: term.en.term,
        }
      );
      console.log(term.en.term);
      console.log(response.data.example);
      setExampleTerm(response.data.example);
      setExampleLoading(false);
    } catch (err) {
      console.log(term.en.term);
      console.log(response.data.example);
      console.log("Encountered Error: ", err);
      console.log("Backend error response:", err.response?.data);
    }
  };

  const ShowExample = ({ term, language }) => {
    if (term.formExample) {
      // show example
      return (
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-purple-500 text-black text-sm sm:text-base md:text-lg p-4 sm:p-5 rounded-xl shadow-md mx-auto transition-all relative">
          {/* Top right refresh button on md+ */}
          <div className="hidden sm:flex absolute top-3 right-3">
            <button
              onClick={() => refreshExample(term)}
              disabled={exampleLoading}
              className={`p-1 rounded-md border border-white text-white transition duration-300 shadow-md flex items-center justify-center ${
                exampleLoading
                  ? "bg-purple-300 cursor-not-allowed"
                  : "hover:bg-purple-600 hover:text-white"
              }`}
            >
              {exampleLoading ? (
                <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <span className="material-icons text-sm leading-none">
                  refresh
                </span>
              )}
            </button>
          </div>

          <p className="font-bold text-white mb-3">
            {language === "Español"
              ? "Ejemplo en Python:"
              : "Example in Python:"}
          </p>

          <div className="bg-white rounded-md p-3 sm:p-4 overflow-auto max-h-60 border border-gray-300 shadow-inner">
            <pre className="text-left whitespace-pre-wrap break-words">
              <code className="text-gray-800 font-mono">
                {exampleTerm || term.example}
              </code>
            </pre>
          </div>

          {/* Bottom refresh for xs/sm screens only */}
          <div className="mt-3 flex justify-center sm:hidden">
            <button
              onClick={() => refreshExample(term)}
              disabled={exampleLoading}
              className={`p-1 rounded-md border border-white text-white transition duration-300 shadow-md flex items-center justify-center ${
                exampleLoading
                  ? "bg-purple-300 cursor-not-allowed"
                  : "hover:bg-purple-600 hover:text-white"
              }`}
            >
              {exampleLoading ? (
                <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <span className="material-icons text-sm leading-none flex items-center justify-center">
                  refresh
                </span>
              )}
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div
        onClick={onClose}
        className="bg-[rgba(0,0,0,0.5)] fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-11/12 max-w-2xl sm:p-10 p-6 rounded-2xl shadow-2xl relative flex flex-col gap-6 border-t-8 border-purple-500 animate-fade-in-scale duration-300"
        >
          {/* Header */}
          <div className="text-center">
            <span className="inline-block text-sm uppercase tracking-widest text-purple-600 font-semibold">
              {language === "Español" ? "Término Técnico" : "Tech Term"}
            </span>
            <h1 className="text-3xl font-extrabold text-zinc-900 mt-2">
              {language === "Español" ? term.es.term : term.en.term}
            </h1>
            <p className="text-zinc-500 text-lg mt-2 italic">
              {language === "Español"
                ? `Traducción: ${term.en.term}`
                : `Translation: ${term.es.term}`}
            </p>
          </div>

          {/* Definition */}
          <div className="text-zinc-700 text-left text-base sm:text-lg leading-relaxed bg-zinc-100 p-5 rounded-xl border border-zinc-200">
            <ReactMarkdown>
              {language === "Español" ? term.es.def : term.en.def}
            </ReactMarkdown>
          </div>

          {/* Example Section (unchanged) */}
          <ShowExample term={term} />

          {/* Close Button (optional if needed) */}
          {/* 
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600"
      >
        <span className="text-xl">&times;</span>
      </button>
      */}
        </div>
      </div>
    </>
  );
}

export default TermModal;

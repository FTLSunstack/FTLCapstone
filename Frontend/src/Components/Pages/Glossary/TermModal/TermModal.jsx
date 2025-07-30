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
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-gray-200 text-black text-sm sm:text-base md:text-lg p-4 sm:p-5 rounded-xl shadow-md mx-auto transition-all relative">
          {/* Top right refresh button on md+ */}
          <div className="hidden sm:flex absolute top-3 right-3">
            <button
              onClick={() => refreshExample(term)}
              disabled={exampleLoading}
              className={`p-1 rounded-md border border-purple-500 text-purple-700 transition duration-300 shadow-md flex items-center justify-center ${
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

          <p className="font-bold text-purple-700 mb-3">
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
              className={`p-1 rounded-md border border-purple-500 text-purple-700 transition duration-300 shadow-md flex items-center justify-center ${
                exampleLoading
                  ? "bg-purple-300 cursor-not-allowed"
                  : "hover:bg-purple-600 hover:text-white"
              }`}
            >
              {exampleLoading ? (
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
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
      {language === "Español" ? (
        <div
          onClick={onClose}
          className="bg-[rgba(0,0,0,0.5)] fixed inset-0 flex items-center justify-center animation-fade-in transition-all duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white flex flex-col items-center justify-center text-center rounded-lg p-16 shadow-lg max-w-3/5"
          >
            <div>
              <h1 className="text-black font-bold text-2xl">{term.es.term}</h1>
              <h2 className="text-xl my-4">Traducción: {term.en.term}</h2>
              <div className="text-gray-700 text-lg my-4">
                <ReactMarkdown>{term.es.def}</ReactMarkdown>
              </div>
              <ShowExample term={term} />
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
            className="bg-white flex flex-col items-center justify-center text-center rounded-lg p-16 shadow-lg max-w-3/5"
          >
            <h1 className="text-black font-bold text-2xl">{term.en.term}</h1>
            <h2 className="text-xl my-4">Translation: {term.es.term}</h2>
            <div className="text-gray-700 text-lg my-4">
              <ReactMarkdown>{term.en.def}</ReactMarkdown>
            </div>
            <ShowExample term={term} />
          </div>
        </div>
      )}
    </>
  );
}

export default TermModal;

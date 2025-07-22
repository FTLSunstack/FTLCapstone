import { useEffect } from "react";
import "../../../../tailwind.css";
import axios from "axios";
import { useState } from "react";
export default function ExplanationBox({ language, codeExplanation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [explanation, setExplanation] = useState("");
  const [liveFeedback, setLiveFeedback] = useState("");
  const [emptyCode, setEmptyCode] = useState(null);

  const handleCodeExplanation = async (code) => {
    // console.log("Code being sent:", code);
    // console.log("Type of code:", typeof code);

    try {
      if (!code || code.trim() === "") {
        setEmptyCode(true);
        setLoading(false);
        return;
      }
      setError("");
      setEmptyCode(false);
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/explainer/explain-code",
        {
          codeSnippet: code,
          language: "python",
        }
      );
      setExplanation(response.data.explanation.explanation);
      setLiveFeedback(response.data.explanation.liveFeedback);
      console.log(response.data.explanation.liveFeedback);
      console.log(response.data);
    } catch (err) {
      console.log("Encountered Error: ", err);
      console.log("Backend error response:", err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleCodeExplanation(codeExplanation);
  }, [codeExplanation, language]);

  return (
    <div>
      {language === "English" ? (
        <div className="outline-solid w-[800px] h-[1070px] rounded-lg shadow-2xl bg-zinc-900 text-white">
          <div className="p-6 rounded-t-lg border-b-1">
            <h1>AI Explanation/Translation</h1>
          </div>

          <div className="flex flex-col">
            <div className="m-10 p-5 h-[500px] rounded-lg outline-solid ">
              <div className="flex flex-row gap-2 items-center ">
                <span className="bg-green-700 flex items-center px-2 py-1 rounded-full">
                  💡
                </span>
                <h2 className="text-xl font-bold text-green-700 ">
                  Code Explanation
                </h2>
              </div>
              {emptyCode ? (
                <div className="flex items-center justify-center h-84 mt-5">
                  <p className="text-gray-400 text-center italic">
                    Please enter some code to get an explanation
                  </p>
                </div>
              ) : loading ? (
                <div className="flex flex-row justify-center items-center h-84 gap-2 mt-5">
                  <div className="animate-spin rounded-full h-8 w-8 border-2 border-emerald-500 border-t-transparent"></div>
                  <p className="text-emerald-500 text-lg font-semibold">
                    Analyzing your code...
                  </p>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center h-32 mt-5">
                  <p className="text-red-400 text-center">{error}</p>
                </div>
              ) : (
                <p className="font-semibold mt-5 text-lg">{explanation}</p>
              )}
            </div>

            <div className="m-10 p-5 h-[330px] rounded-lg outline-solid ">
              <div className="flex flex-row gap-2 items-center ">
                <span className="bg-sky-600 flex items-center px-2 py-1 rounded-full">
                  📖
                </span>
                <h2 className="text-xl font-bold text-sky-600">
                  Live Feedback
                </h2>
              </div>

              {emptyCode ? (
                <div className="flex items-center justify-center h-50 mt-5">
                  <p className="text-gray-400 text-center italic">
                    Feedback will appear here after code analysis
                  </p>
                </div>
              ) : loading ? (
                <div className="flex flex-row justify-center items-center h-50 gap-2 mt-5">
                  <div className="animate-spin rounded-full h-8 w-8 border-2 border-sky-500 border-t-transparent"></div>
                  <p className="text-sky-500 text-lg font-semibold">
                    Giving live feedback...
                  </p>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center h-32 mt-5">
                  <p className="text-red-400 text-center">
                    Unable to provide feedback
                  </p>
                </div>
              ) : (
                <p className="font-semibold mt-5 text-lg">{liveFeedback}</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="outline-solid w-[800px] h-[1070px] rounded-lg shadow-2xl bg-zinc-900 text-white">
          <div className="p-6 rounded-t-lg border-b-1">
            <h1>Explicación/traducción de AI</h1>
          </div>

          <div className="flex flex-col">
            <div className="m-10 p-5 h-[500px] rounded-lg outline-solid">
              <div className="flex flex-row gap-2 items-center ">
                <span className="bg-green-700 flex items-center px-2 py-1 rounded-full">
                  💡
                </span>
                <h2 className="text-xl font-bold text-green-700 ">
                  Explicación del concepto
                </h2>
              </div>
              {emptyCode ? (
                <div className="flex items-center justify-center h-84 mt-5">
                  <p className="text-gray-400 text-center italic">
                    Por favor ingresa código para obtener una explicación
                  </p>
                </div>
              ) : loading ? (
                <div className="flex flex-row justify-center items-center h-84 gap-2 mt-5">
                  <div className="animate-spin rounded-full h-8 w-8 border-2 border-emerald-500 border-t-transparent"></div>
                  <p className="text-emerald-500 text-lg font-semibold">
                    Analizando tu código...
                  </p>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center h-32 mt-5">
                  <p className="text-red-400 text-center">{error}</p>
                </div>
              ) : (
                <p className="font-semibold mt-5 text-lg">{explanation}</p>
              )}
            </div>

            <div className="m-10 p-5 h-[330px] rounded-lg outline-solid ">
              <div className="flex flex-row gap-2 items-center ">
                <span className="bg-sky-600 flex items-center px-2 py-1 rounded-full">
                  📖
                </span>
                <h2 className="text-xl font-bold text-sky-600">
                  Comentarios en vivo
                </h2>
              </div>

              {emptyCode ? (
                <div className="flex items-center justify-center h-50 mt-5">
                  <p className="text-gray-400 text-center italic">
                    Los comentarios aparecerán aquí después del análisis del
                    código.
                  </p>
                </div>
              ) : loading ? (
                <div className="flex flex-row justify-center items-center h-50 gap-2 mt-5">
                  <div className="animate-spin rounded-full h-8 w-8 border-2 border-sky-500 border-t-transparent"></div>
                  <p className="text-sky-500 text-lg font-semibold">
                    Dando retroalimentación en vivo...
                  </p>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center h-32 mt-5">
                  <p className="text-red-400 text-center">
                    No es posible proporcionar comentarios
                  </p>
                </div>
              ) : (
                <p className="font-semibold mt-5 text-lg">{liveFeedback}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

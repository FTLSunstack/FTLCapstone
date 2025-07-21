import { useEffect } from "react";
import "../../../../tailwind.css";
import axios from "axios";
import { useState } from "react";
export default function ExplanationBox({ language, codeExplanation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [explanation, setExplanation] = useState("");

  const handleCodeExplanation = async (code) => {
    // console.log("Code being sent:", code);
    // console.log("Type of code:", typeof code);

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "http://localhost:3000/explainer/explain-code",
        {
          codeSnippet: code,
          language: "python",
        }
      );
      setExplanation(response.data.explanation.explanation);
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
        <div className="outline-solid w-[800px] h-[1070px] rounded-lg shadow-2xl">
          <div className="p-6 rounded-t-lg border-b-1">
            <h1>AI Explanation/Translation</h1>
          </div>

          <div className="flex flex-col">
            <div className="m-10 p-5 h-[500px] rounded-lg outline-solid ">
              <h2>Concept Explanation</h2>
            </div>

            <div className="m-10 p-5 h-[330px] rounded-lg outline-solid ">
              <h2>Live Feedback</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="outline-solid w-[800px] h-[1070px] rounded-lg shadow-2xl">
          <div className="p-6 rounded-t-lg border-b-1">
            <h1>Explicación/traducción de AI</h1>
          </div>

          <div className="flex flex-col">
            <div className="m-10 p-5 h-[500px] rounded-lg outline-solid ">
              <h2 className="text-xl font-bold mb-3 border-b-2 text-violet-500">
                Explicación del concepto
              </h2>
              <p className="font-semibold mt-5 text-lg">{explanation}</p>
            </div>

            <div className="m-10 p-5 h-[330px] rounded-lg outline-solid ">
              <h2>Comentarios en vivo</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

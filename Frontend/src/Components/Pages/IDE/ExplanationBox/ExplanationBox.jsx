import "../../../../tailwind.css";

export default function ExplanationBox({ language }) {
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
              <h2>Explicación del concepto</h2>
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

import "../../../../tailwind.css";

export default function ExplanationBox() {
  return (
    <div>
      <div className="outline-solid w-[800px] h-[1070px] rounded-lg">
        <div className="p-6 rounded-t-lg border-b-1">
          <h1>AI Explanation/Translation</h1>
        </div>

        <div className="flex flex-col">
          <div className="m-10 p-5 h-[500px] rounded-lg outline-solid shadow-2xl">
            <h2>Concept Explanation</h2>
          </div>

          <div className="m-10 p-5 h-[330px] rounded-lg outline-solid shadow-2xl">
            <h2>Live Feedback</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

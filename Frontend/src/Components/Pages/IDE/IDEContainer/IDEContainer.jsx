import { useState } from "react";
import "../../../../tailwind.css";
import CodeEditor from "../CodeEditor/CodeEditor.jsx";
import CodeOutput from "../CodeOutput/CodeOutput.jsx";

function IDEContainer({ language, onCodeExplanation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleExplanation = (code) => {
    if (onCodeExplanation) onCodeExplanation(code);
  };

  return (
    <>
      <div className="flex flex-col">
        <CodeEditor
          language={language}
          onLoading={setIsLoading}
          onOutput={setOutput}
          onError={setError}
          onResult={setResult}
          onRun={handleExplanation}
        />
        <CodeOutput
          language={language}
          loading={isLoading}
          output={output}
          error={error}
          result={result}
        />
      </div>
    </>
  );
}

export default IDEContainer;

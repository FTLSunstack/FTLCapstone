import { useState } from "react";
import "../../../../tailwind.css";
import CodeEditor from "../CodeEditor/CodeEditor.jsx";
import CodeOutput from "../CodeOutput/CodeOutput.jsx";

function IDEContainer({ language, onCodeExplanation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const [userInput, setUserInput] = useState("");

  const handleExplanation = (code) => {
    if (onCodeExplanation) onCodeExplanation(code);
  };

  return (
    <>
      <div className="flex flex-col gap-5 justify-center">
        <CodeEditor
          language={language}
          onLoading={setIsLoading}
          onOutput={setOutput}
          onError={setError}
          onResult={setResult}
          onRun={handleExplanation}
          onInput={userInput}
        />
        <CodeOutput
          language={language}
          loading={isLoading}
          output={output}
          error={error}
          result={result}
          onInputChange={setUserInput}
        />
      </div>
    </>
  );
}

export default IDEContainer;

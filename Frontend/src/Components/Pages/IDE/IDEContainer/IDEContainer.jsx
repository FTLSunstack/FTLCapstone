import { useState } from "react";
import "../../../../tailwind.css";
import CodeEditor from "../CodeEditor/CodeEditor.jsx";
import CodeOutput from "../CodeOutput/CodeOutput.jsx";

function IDEContainer({ language }) {
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  return (
    <>
      <div className="flex flex-col">
        <CodeEditor
          language={language}
          onLoading={setIsLoading}
          onOutput={setOutput}
          onError={setError}
          onResult={setResult}
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

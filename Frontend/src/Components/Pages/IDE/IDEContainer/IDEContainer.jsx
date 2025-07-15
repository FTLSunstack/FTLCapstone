import { useState } from "react";
import "../../../../tailwind.css";
import CodeEditor from "../CodeEditor/CodeEditor.jsx";
import CodeOutput from "../CodeOutput/CodeOutput.jsx";

function IDEContainer() {
  return (
    <>
      <div>
        <h1 className="text-purple-500">IDE Container</h1>
        <CodeEditor />
        <CodeOutput />
      </div>
    </>
  );
}

export default IDEContainer;

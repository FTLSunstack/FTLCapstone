import { useState } from "react";
import "../../../../tailwind.css";
import CodeEditor from "../CodeEditor/CodeEditor.jsx";
import CodeOutput from "../CodeOutput/CodeOutput.jsx";

function IDEContainer({ language }) {
  return (
    <>
      <div className="flex flex-col">
        <CodeEditor language={language} />
        <CodeOutput language={language} />
      </div>
    </>
  );
}

export default IDEContainer;

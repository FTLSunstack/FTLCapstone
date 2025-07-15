import React from "react";
import "../../../../tailwind.css";
import NavBar from "../../../Common/NavBar/NavBar";
import CodeEditor from "../CodeEditor/CodeEditor";
import CodeOutput from "../CodeOutput/CodeOutput";
import ExplanationBox from "../ExplanationBox/ExplanationBox";

export default function IDEPage() {
  return (
    <>
      <NavBar />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <CodeEditor />
          <CodeOutput />
        </div>
        <div className="m-8">
          <ExplanationBox />
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import "../../../../tailwind.css";
import NavBar from "../../../Common/NavBar/NavBar";
import Footer from "../../../Common/Footer/Footer";
import CodeEditor from "../CodeEditor/CodeEditor";
import CodeOutput from "../CodeOutput/CodeOutput";
import ExplanationBox from "../ExplanationBox/ExplanationBox";
import IDEContainer from "../IDEContainer/IDEContainer";
import AdditionalResources from "../AdditionalResources/AdditionalResources";

function IDEPage({ language, setLanguage }) {
  const [codeInstance, setCodeInstance] = useState(null);

  const handleCodeExplanation = (code) => {
    setCodeInstance(code);
  };

  return (
    <>
      <NavBar language={language} setLanguage={setLanguage} />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <IDEContainer
            language={language}
            onCodeExplanation={handleCodeExplanation}
          />
        </div>
        <div className="m-8">
          <ExplanationBox language={language} codeExplanation={codeInstance} />
        </div>
      </div>
      <div>
        <AdditionalResources language={language} />
      </div>
      <Footer language={language} />
    </>
  );
}

export default IDEPage;

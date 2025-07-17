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
  return (
    <>
      <NavBar language={language} setLanguage={setLanguage} />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <IDEContainer language={language} />
        </div>
        <div className="m-8">
          <ExplanationBox language={language} />
        </div>
      </div>
      <div>
        <AdditionalResources />
      </div>
      <Footer language={language} />
    </>
  );
}

export default IDEPage;

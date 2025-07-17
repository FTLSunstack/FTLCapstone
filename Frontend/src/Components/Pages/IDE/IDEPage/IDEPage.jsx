import React, { useState } from "react";
import "../../../../tailwind.css";
import NavBar from "../../../Common/NavBar/NavBar";
import CodeEditor from "../CodeEditor/CodeEditor";
import CodeOutput from "../CodeOutput/CodeOutput";
import ExplanationBox from "../ExplanationBox/ExplanationBox";
import IDEContainer from "../IDEContainer/IDEContainer";
import AdditionalResources from "../AdditionalResources/AdditionalResources";

function IDEPage({ language }) {
  const [languageOption, setLanguageOption] = useState("English");

  const handleChangeLanguage = () => {
    if (languageOption === "English") {
      setLanguageOption("Español");
    } else {
      setLanguageOption("English");
    }

    console.log("Language change was ran");
  };

  return (
    <>
      <NavBar
        onLanguageChange={handleChangeLanguage}
        language={languageOption}
      />
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <IDEContainer language={languageOption} />
        </div>
        <div className="m-8">
          <ExplanationBox language={languageOption} />
        </div>
      </div>
      <div>
        <AdditionalResources language={languageOption} />
      </div>
    </>
  );
}

export default IDEPage;

import React, { useState } from "react";
import "../../../../tailwind.css";
import NavBar from "../../../Common/NavBar/NavBar";
import Footer from "../../../Common/Footer/Footer";
import Description from "../Description/IDEDescription";
import ExplanationBox from "../ExplanationBox/ExplanationBox";
import IDEContainer from "../IDEContainer/IDEContainer";
import AdditionalResources from "../AdditionalResources/AdditionalResources";

function IDEPage({
  language,
  setLanguage,
  setLastPage,
  codeInput,
  setCodeInput,
}) {
  const [codeInstance, setCodeInstance] = useState(null);

  const handleCodeExplanation = (code) => {
    setCodeInstance(code);
  };

  return (
    <>
      <NavBar
        language={language}
        setLanguage={setLanguage}
        setLastPage={setLastPage}
      />
      <Description language={language} />
      <div className="flex flex-col lg:flex-row gap-5 justify-center p-10">
        <div className="flex-1">
          <IDEContainer
            language={language}
            onCodeExplanation={handleCodeExplanation}
            codeInput={codeInput}
            setCodeInput={setCodeInput}
          />
        </div>
        <div className="flex-1 flex flex-col h-full w-full">
          <ExplanationBox language={language} codeExplanation={codeInstance} />
        </div>
      </div>
      <AdditionalResources language={language} />
      <Footer language={language} />
    </>
  );
}

export default IDEPage;

import React from "react";
import "../../../../index.css";
import AdditionalResources from "../AdditionalResources/AdditionalResources.jsx";
import IDEContainer from "../IDEContainer/IDEContainer.jsx";
import ExplanationBox from "../ExplanationBox/ExplanationBox.jsx";

function IDEPage() {
  return (
    <>
      <div className="text-red-400">IDEPage</div>
      <IDEContainer />
      <ExplanationBox />
      <AdditionalResources />
    </>
  );
}

export default IDEPage;

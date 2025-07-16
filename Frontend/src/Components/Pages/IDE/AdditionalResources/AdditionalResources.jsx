import { useState } from "react";
import "../../../../tailwind.css";

function AdditionalResources() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-between m-10 p-5 text-lg w-3/4 border-b-2">
            <h1 className="hover:cursor-pointer">Additional Resources</h1>
            <span className="hover:cursor-pointer">&gt;</span>
          </div>
          <div className="flex flex-row justify-between m-10 p-5 text-lg w-3/4 border-b-2">
            <h1 className="hover:cursor-pointer">Complaints? Reach out to us here</h1>
            <span className="hover:cursor-pointer">&gt;</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdditionalResources;

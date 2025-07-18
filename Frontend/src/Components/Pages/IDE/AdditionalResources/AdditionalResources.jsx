import { useState } from "react";
import "../../../../tailwind.css";

function AdditionalResources({ language }) {
  return (
    <>
      <div>
        {language === "English" ? (
          <div className="flex flex-col items-center">
            <div className="flex flex-row justify-between m-10 p-5 text-lg w-3/4 border-b-2 hover:cursor-pointer group">
              <h1 className="hover:cursor-pointer font-semibold">
                Additional Resources
              </h1>
              <span className="hover:cursor-pointer group-hover:rotate-90 transition ease-in-out">
                &gt;
              </span>
            </div>
            <div className="flex flex-row justify-between m-10 p-5 text-lg w-3/4 border-b-2 hover:cursor-pointer group ">
              <h1 className="hover:cursor-pointer font-semibold">
                Complaints? Reach out to us here
              </h1>
              <span className="hover:cursor-pointer group-hover:rotate-90 transition ease-in-out">
                &gt;
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex flex-row justify-between m-10 p-5 text-lg w-3/4 border-b-2 hover:cursor-pointer group">
              <h1 className="hover:cursor-pointer font-semibold">
                Recursos adicionales
              </h1>
              <span className="hover:cursor-pointer group-hover:rotate-90 transition ease-in-out">
                &gt;
              </span>
            </div>
            <div className="flex flex-row justify-between m-10 p-5 text-lg w-3/4 border-b-2 hover:cursor-pointer group ">
              <h1 className="hover:cursor-pointer font-semibold">
                ¿Tiene alguna queja? Contáctenos aquí.
              </h1>
              <span className="hover:cursor-pointer group-hover:rotate-90 transition ease-in-out">
                &gt;
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AdditionalResources;

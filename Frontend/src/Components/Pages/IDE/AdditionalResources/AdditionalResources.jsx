import { useEffect, useState } from "react";
import "../../../../tailwind.css";
import { useNavigate } from "react-router";

function AdditionalResources({ language }) {
  const [showAdditionalResources, setShowAdditionalResources] = useState(false);
  const [showComplaints, setShowComplaints] = useState(false);
  const navigate = useNavigate();

  const openMoreResources = () => {
    setShowAdditionalResources(!showAdditionalResources);
    console.log("Open more resources triggered");
  };

  const openComplaints = () => {
    setShowComplaints(!showComplaints);
    console.log("Open complaints triggered");
  };

  const navigateToGlossary = () => {
    navigate("/glossary");
  };

  const handleEmailRedirect = () => {
    window.location.href =
      "mailto:codepath@example.com?subject=Complaint&body=Hello, I would like to submit a complaint regarding...";
  };

  return (
    <>
      <div>
        {language === "English" ? (
          <div className="flex flex-col items-center">
            {/* Additional Resources Section */}
            <div className="w-full flex flex-col items-center">
              <div
                className="flex flex-row justify-between m-10 p-5 text-lg w-3/4 border-b-2 hover:cursor-pointer group hover:bg-gray-50 transition-colors duration-200"
                onClick={openMoreResources}
              >
                <h1 className="hover:cursor-pointer font-semibold">
                  Additional Resources
                </h1>
                <span
                  className={`hover:cursor-pointer transition-transform duration-300 ease-in-out ${
                    showAdditionalResources ? "rotate-90" : "rotate-0"
                  }`}
                >
                  &gt;
                </span>
              </div>

              {/* Smooth expanding content for Additional Resources */}
              <div
                className={`w-3/4 overflow-hidden transition-all duration-500 ease-in-out ${
                  showAdditionalResources
                    ? "max-h-32 opacity-100 mb-5"
                    : "max-h-0 opacity-0 mb-0"
                }`}
              >
                <div className="flex flex-row justify-center">
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h1 className="text-gray-700">
                      Want to learn more? Visit our{" "}
                      <button
                        onClick={navigateToGlossary}
                        className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors duration-200 font-semibold cursor-pointer"
                      >
                        Glossary
                      </button>{" "}
                      and take a look!
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* Complaints Section */}
            <div
              className="flex flex-row justify-between m-10 p-5 text-lg w-3/4 border-b-2 hover:cursor-pointer group hover:bg-gray-50 transition-colors duration-200"
              onClick={openComplaints}
            >
              <h1 className="hover:cursor-pointer font-semibold">
                Complaints? Reach out to us here
              </h1>
              <span
                className={`hover:cursor-pointer transition-transform duration-300 ease-in-out ${
                  showComplaints ? "rotate-90" : "rotate-0"
                }`}
              >
                &gt;
              </span>
            </div>

            {/* Smooth expanding content for Complaints */}
            <div
              className={`w-3/4 overflow-hidden transition-all duration-500 ease-in-out ${
                showComplaints
                  ? "max-h-40 opacity-100 mb-5"
                  : "max-h-0 opacity-0 mb-0"
              }`}
            >
              <div className="flex flex-row justify-center">
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h1 className="text-gray-700 mb-3">
                    We value your feedback and take all complaints seriously.
                  </h1>
                  <button
                    onClick={handleEmailRedirect}
                    className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-semibold hover:shadow-md cursor-pointer"
                  >
                    Email Codifica
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            {/* Spanish Additional Resources Section */}
            <div
              className="flex flex-row justify-between m-10 p-5 text-lg w-3/4 border-b-2 hover:cursor-pointer group hover:bg-gray-50 transition-colors duration-200"
              onClick={openMoreResources}
            >
              <h1 className="hover:cursor-pointer font-semibold">
                Recursos adicionales
              </h1>
              <span
                className={`hover:cursor-pointer transition-transform duration-300 ease-in-out ${
                  showAdditionalResources ? "rotate-90" : "rotate-0"
                }`}
              >
                &gt;
              </span>
            </div>

            {/* Smooth expanding content for Additional Resources (Spanish) */}
            <div
              className={`w-3/4 overflow-hidden transition-all duration-500 ease-in-out ${
                showAdditionalResources
                  ? "max-h-32 opacity-100 mb-5"
                  : "max-h-0 opacity-0 mb-0"
              }`}
            >
              <div className="flex flex-row justify-center">
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h1 className="text-gray-700">
                    ¿Quiere aprender más? Visite nuestro{" "}
                    <button
                      onClick={navigateToGlossary}
                      className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors duration-200 font-semibold cursor-pointer"
                    >
                      Glosario
                    </button>{" "}
                    y échele un vistazo!
                  </h1>
                </div>
              </div>
            </div>

            {/* Spanish Complaints Section */}

            <div
              className="flex flex-row justify-between m-10 p-5 text-lg w-3/4 border-b-2 hover:cursor-pointer group hover:bg-gray-50 transition-colors duration-200"
              onClick={openComplaints}
            >
              <h1 className="hover:cursor-pointer font-semibold">
                ¿Tiene alguna queja? Contáctenos aquí.
              </h1>
              <span
                className={`hover:cursor-pointer transition-transform duration-300 ease-in-out ${
                  showComplaints ? "rotate-90" : "rotate-0"
                }`}
              >
                &gt;
              </span>
            </div>

            {/* Smooth expanding content for Complaints (Spanish) */}
            <div
              className={`w-3/4 overflow-hidden transition-all duration-500 ease-in-out${
                showComplaints
                  ? "max-h-40 opacity-100 mb-5"
                  : "max-h-0 opacity-0 mb-0"
              }`}
            >
              <div className="flex flex-row justify-center">
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h1 className="text-gray-700 mb-3">
                    Valoramos sus comentarios y tomamos todas las quejas en
                    serio.
                  </h1>
                  <button
                    onClick={handleEmailRedirect}
                    className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-semibold hover:shadow-md cursor-pointer"
                  >
                    Enviar Email a Codifica
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AdditionalResources;

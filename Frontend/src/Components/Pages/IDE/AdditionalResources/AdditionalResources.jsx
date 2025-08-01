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
                className="flex items-center justify-between w-3/4 p-5 m-6 border-b-2 cursor-pointer transition-colors duration-200 rounded-md bg-white hover:bg-violet-50"
                onClick={openMoreResources}
              >
                <h1 className="font-semibold text-lg text-black">
                  Additional Resources
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-purple-600 transform transition-transform duration-300 ${
                    showAdditionalResources ? "rotate-90" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <div
                className={`w-3/4 transition-all duration-500 ease-in-out transform ${
                  showAdditionalResources
                    ? "scale-100 opacity-100 max-h-[200px] mb-6"
                    : "scale-95 opacity-0 max-h-0 mb-0"
                } overflow-hidden`}
              >
                <div className="p-5 bg-violet-100 rounded-xl border border-purple-300 shadow-md text-center">
                  <p className="text-gray-700">
                    Want to learn more? Visit our{" "}
                    <button
                      onClick={navigateToGlossary}
                      className="text-purple-600 hover:text-purple-800 font-semibold underline transition-colors"
                    >
                      Glossary
                    </button>{" "}
                    and take a look!
                  </p>
                </div>
              </div>
            </div>

            {/* Complaints Section */}
            <div className="w-full flex flex-col items-center">
              <div
                onClick={openComplaints}
                className="flex items-center justify-between w-3/4 p-5 m-6 border-b-2 cursor-pointer transition-colors duration-200 rounded-md bg-white hover:bg-violet-50"
              >
                <h1 className="font-semibold text-lg text-black">
                  Complaints? Reach out to us here
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-purple-600 transform transition-transform duration-300 ${
                    showComplaints ? "rotate-90" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <div
                className={`w-3/4 transition-all duration-500 ease-in-out transform ${
                  showComplaints
                    ? "scale-100 opacity-100 max-h-[220px] mb-6"
                    : "scale-95 opacity-0 max-h-0 mb-0"
                } overflow-hidden`}
              >
                <div className="p-5 bg-violet-100 rounded-xl border border-purple-300 shadow-md text-center">
                  <p className="text-gray-700 mb-4">
                    We value your feedback and take all complaints seriously.
                  </p>
                  <button
                    onClick={handleEmailRedirect}
                    className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-md"
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
            <div className="w-full flex flex-col items-center">
              <div
                className="flex items-center justify-between w-3/4 p-5 m-6 border-b-2 cursor-pointer transition-colors duration-200 rounded-md bg-white hover:bg-violet-50"
                onClick={openMoreResources}
              >
                <h1 className="font-semibold text-lg text-black">
                  Recursos Adicionales
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-purple-600 transform transition-transform duration-300 ${
                    showAdditionalResources ? "rotate-90" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <div
                className={`w-3/4 transition-all duration-500 ease-in-out transform ${
                  showAdditionalResources
                    ? "scale-100 opacity-100 max-h-[200px] mb-6"
                    : "scale-95 opacity-0 max-h-0 mb-0"
                } overflow-hidden`}
              >
                <div className="p-5 bg-violet-100 rounded-xl border border-purple-300 shadow-md text-center">
                  <p className="text-gray-700">
                    ¿Quiere aprender más? Visite nuestro{" "}
                    <button
                      onClick={navigateToGlossary}
                      className="text-purple-600 hover:text-purple-800 font-semibold underline transition-colors"
                    >
                      Glosario
                    </button>{" "}
                    y échele un vistazo!
                  </p>
                </div>
              </div>
            </div>

            {/* Complaints Section */}
            <div className="w-full flex flex-col items-center">
              <div
                onClick={openComplaints}
                className="flex items-center justify-between w-3/4 p-5 m-6 border-b-2 cursor-pointer transition-colors duration-200 rounded-md bg-white hover:bg-violet-50"
              >
                <h1 className="font-semibold text-lg text-black">
                  ¿Tiene alguna queja? Contáctenos aquí.
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-purple-600 transform transition-transform duration-300 ${
                    showComplaints ? "rotate-90" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <div
                className={`w-3/4 transition-all duration-500 ease-in-out transform ${
                  showComplaints
                    ? "scale-100 opacity-100 max-h-[220px] mb-6"
                    : "scale-95 opacity-0 max-h-0 mb-0"
                } overflow-hidden`}
              >
                <div className="p-5 bg-violet-100 rounded-xl border border-purple-300 shadow-md text-center">
                  <p className="text-gray-700 mb-4">
                    Valoramos sus comentarios y tomamos todas las quejas en
                    serio.
                  </p>
                  <button
                    onClick={handleEmailRedirect}
                    className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-md"
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

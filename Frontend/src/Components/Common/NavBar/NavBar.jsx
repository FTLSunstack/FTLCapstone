import { useState } from "react";
import "../../../tailwind.css";

function NavBar() {
  const [language, setLanguage] = useState("English");

  const handleChangeLanguage = () => {
    if (language === "English") {
      setLanguage("Spanish");
    } else {
      setLanguage("English");
    }
  };

  return (
    <>
      <div>
        <div className="bg-white p-5 flex flex-row justify-between items-center border-b border-black">
          <h1 className="text-violet-600 font-bold text-3xl hover:cursor-pointer hover:opacity-70 transition ease-in-out">
            Codifica
          </h1>

          <div className="flex flex-row gap-10">
            <a
              href="#"
              className="text-lg text-gray-500 hover:text-black transition ease-in-out"
            >
              IDE
            </a>
            <a
              href="#"
              className="text-lg text-gray-500 hover:text-black transition ease-in-out"
            >
              Glossary
            </a>
            <a
              href="#"
              className="text-lg text-gray-500 hover:text-black transition ease-in-out"
            >
              About
            </a>
          </div>

          <div>
            <button
              onClick={handleChangeLanguage}
              className="bg-violet-500 px-5 py-2 rounded-md hover:cursor-pointer w-24 text-white hover:bg-violet-700 transition ease-in-out"
            >
              {language}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

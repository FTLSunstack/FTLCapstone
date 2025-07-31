import { useState } from "react";
import "../../../../tailwind.css";

function SearchBar({
  language,
  search,
  setSearch,
  handleLetterClick,
  activeLetter,
}) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input.replaceAll(" ", "_"));
    console.log("Searching for:", search);
  };

  const handleClear = (e) => {
    e.preventDefault();
    console.log("Clearing");
    setSearch("");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-10 border-1 border-black bg-white shadow-xl rounded-lg m-10 w-4/5 max-w-[1150px]">
        <div>
          <div className="flex flex-col sm:flex-row w-full sm:w-2/3 gap-2 justify-self-center">
            <form
              id="search-bar"
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row justify-center items-center gap-2 flex-1"
            >
              <div className="relative w-full flex-1">
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder={
                    language === "Español" ? "Buscar..." : "Search..."
                  }
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  name="Search"
                  className="border border-black pl-10 pr-4 py-2 rounded-lg w-full"
                />
              </div>
              {language === "Español" ? (
                <div className="flex flex-row gap-2">
                  <button
                    type="submit"
                    className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700"
                  >
                    Buscar
                  </button>
                  <button
                    onClick={handleClear}
                    className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700"
                  >
                    Borrar
                  </button>
                </div>
              ) : (
                <div className="flex flex-row gap-2">
                  <button className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700">
                    Search
                  </button>
                  <button
                    onClick={handleClear}
                    className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700"
                  >
                    Clear
                  </button>
                </div>
              )}
            </form>
          </div>
          <div className="flex flex-wrap justify-center gap-1 mt-7">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
              <button
                key={letter}
                onClick={() => handleLetterClick(letter)}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium 
        ${
          activeLetter === letter
            ? "bg-purple-600 text-white"
            : "border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white"
        } transition`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;

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
    handleLetterClick("");
    setInput("");
    setSearch("");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-violet-200 to-blue-100 shadow-xl rounded-2xl border-2 border-purple-400 rounded-xl border-2 border-purple-400 m-10 w-4/5 max-w-[1150px]">
        <div className="w-full max-w-2xl">
          {/* search form */}
          <form
            id="search-bar"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 w-full"
          >
            <div className="relative w-full flex-1">
              <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-500"
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
                placeholder={language === "Español" ? "Buscar..." : "Search..."}
                onChange={(e) => setInput(e.target.value)}
                value={input}
                name="Search"
                className="w-full py-2 pl-10 pr-4 rounded-xl border-2 border-purple-400 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 transition"
              >
                {language === "Español" ? "Buscar" : "Search"}
              </button>
              <button
                onClick={handleClear}
                type="button"
                className="px-4 py-2 bg-purple-500 text-white rounded-xl shadow-md hover:bg-purple-700 transition"
              >
                {language === "Español" ? "Borrar" : "Clear"}
              </button>
            </div>
          </form>

          {/* alphabet filter */}
          <div className="flex flex-wrap justify-center gap-1 mt-8">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
              <button
                key={letter}
                onClick={() => handleLetterClick(letter)}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium shadow-sm
              ${
                activeLetter === letter
                  ? "bg-purple-600 text-white"
                  : "border border-purple-500 text-purple-600 bg-white hover:bg-purple-600 hover:text-white"
              } transition-all duration-200`}
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

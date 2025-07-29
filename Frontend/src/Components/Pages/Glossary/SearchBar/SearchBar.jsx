import { useState } from "react";
import "../../../../tailwind.css";

function SearchBar({ language, search, setSearch }) {
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
      <div className="flex flex-col items-center justify-center p-10 border-1 border-black bg-white shadow-lg rounded-lg m-10 w-4/5 max-w-[1150px]">
        <div className="flex flex-col sm:flex-row w-full sm:w-2/3 gap-2">
          <form
            id="search-bar"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-2 flex-1"
          >
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setInput(e.target.value)}
              value={input}
              name="Search"
              className="border-1 border-black p-2 rounded-lg flex-1"
            />
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
      </div>
    </>
  );
}

export default SearchBar;

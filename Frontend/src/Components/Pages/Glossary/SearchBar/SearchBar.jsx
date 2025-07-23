import { useState } from "react";
import "../../../../tailwind.css";

function SearchBar({ language, search, setSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", search);
  };

  const handleClear = (e) => {
    e.preventDefault();
    console.log("Clearing");
    setSearch("");
  };

  return (
    <>
      <div className="flex flex-col items-center -justify-center p-10 border-1 border-black bg-white shadow-lg rounded-lg m-10 w-4/5 max-w-[1150px]">
        <div className="flex flex-row w-2/3 gap-2">
          <form
            id="search-bar"
            onSubmit={handleSubmit}
            className="flex flex-row gap-2 flex-1"
          >
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              name="Search"
              className="border-1 border-black p-2 rounded-lg flex-1"
            />
            {language === "Español" ? (
              <button className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700">
                Buscar
              </button>
            ) : (
              <button className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700">
                Search
              </button>
            )}
          </form>
          {language === "Espanol" ? (
            <button className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700">
              Borrar
            </button>
          ) : (
            <button
              onClick={handleClear}
              className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700"
            >
              Clear
            </button>
          )}
        </div>
        {language === "Español" ? (
          <div className="flex flex-row gap-4 mt-4">
            <button className="p-2 bg-blue-500 rounded-lg hover:bg-purple-700 text-white">
              Filtro 1
            </button>
            <button className="p-2 bg-blue-500 rounded-lg hover:bg-purple-700 text-white">
              Filtro 2
            </button>
            <button className="p-2 bg-blue-500 rounded-lg hover:bg-purple-700 text-white">
              Filtro 3
            </button>
            <button className="p-2 bg-blue-500 rounded-lg hover:bg-purple-700 text-white">
              Filtro 4
            </button>
            <button className="p-2 bg-blue-500 rounded-lg hover:bg-purple-700 text-white">
              Filtro 5
            </button>
          </div>
        ) : (
          <div className="flex flex-row gap-4 mt-4">
            <button className="p-2 bg-blue-500 rounded-lg hover:bg-purple-700 text-white">
              Filter 1
            </button>
            <button className="p-2 bg-blue-500 rounded-lg hover:bg-purple-700 text-white">
              Filter 2
            </button>
            <button className="p-2 bg-blue-500 rounded-lg hover:bg-purple-700 text-white">
              Filter 3
            </button>
            <button className="p-2 bg-blue-500 rounded-lg hover:bg-purple-700 text-white">
              Filter 4
            </button>
            <button className="p-2 bg-blue-500 rounded-lg hover:bg-purple-700 text-white">
              Filter 5
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;

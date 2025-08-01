import { use, useState, useEffect } from "react";
import axios from "axios";
import Term from "../Term/Term.jsx";
import "../../../../tailwind.css";

function TermsList({ language, onClick, setModalTerm, search, activeLetter }) {
  const [terms, setTerms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const termsPerPage = 20;

  const indexOfLastTerm = currentPage * termsPerPage;
  const indexOfFirstTerm = indexOfLastTerm - termsPerPage;
  const currentTerms = terms.slice(indexOfFirstTerm, indexOfLastTerm);

  const nextPage = () => {
    if (currentPage < Math.ceil(terms.length / termsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        // Fetch full glossary or filtered by search
        const baseURL = `${import.meta.env.VITE_BACKEND_URL}/glossary`;
        let res;

        if (search === "") {
          res = await axios.get(baseURL);
        } else {
          const langPath = language === "Español" ? "es" : "en";
          res = await axios.get(`${baseURL}/${langPath}/${search}`);
        }

        const rawData = res.data;

        // If rawData is a dictionary (object), convert to array first
        let arrayData = [];

        for (const slug in rawData) {
          arrayData.push({
            slug,
            ...rawData[slug],
          });
        }

        // Filter by activeLetter if applicable
        if (activeLetter) {
          if (language === "English") {
            arrayData = arrayData.filter((entry) =>
              entry.slug.toLowerCase().startsWith(activeLetter.toLowerCase())
            );
          } else {
            arrayData = arrayData.filter((entry) =>
              entry.es.term.toLowerCase().startsWith(activeLetter.toLowerCase())
            );
          }
        }

        setTerms(arrayData);
      } catch (err) {
        console.error("Search error:", err);
        setTerms([]);
      }
    };

    fetchTerms();
  }, [search, activeLetter, language]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10 max-w-4/5">
        {Object.entries(currentTerms).map(([key, t]) => (
          <Term
            key={key}
            term={t}
            language={language}
            onClick={onClick}
            setModalTerm={setModalTerm}
          />
        ))}
      </div>
      <div className="m-8 w-full flex justify-center">
        <div className="flex items-center gap-6 bg-violet-200 border border-violet-600 rounded-xl px-4 py-2 shadow-lg">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <span className="text-sm font-semibold text-purple-700">
            {language === "English"
              ? `Page ${currentPage} of ${Math.ceil(
                  terms.length / termsPerPage
                )}`
              : `Página ${currentPage} de ${Math.ceil(
                  terms.length / termsPerPage
                )}`}
          </span>

          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(terms.length / termsPerPage)}
            className="p-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default TermsList;

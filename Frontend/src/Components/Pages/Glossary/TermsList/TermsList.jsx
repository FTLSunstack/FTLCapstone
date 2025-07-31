import { use, useState, useEffect } from "react";
import axios from "axios";
import Term from "../Term/Term.jsx";
import "../../../../tailwind.css";

function TermsList({ language, onClick, setModalTerm, search, activeLetter }) {
  const [terms, setTerms] = useState([]);

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
        {Object.entries(terms).map(([key, t]) => (
          <Term
            key={key}
            term={t}
            language={language}
            onClick={onClick}
            setModalTerm={setModalTerm}
          />
        ))}
      </div>
    </>
  );
}

export default TermsList;

import { use, useState, useEffect } from "react";
import axios from "axios";
import Term from "../Term/Term.jsx";
import "../../../../tailwind.css";

function TermsList({ language, onClick, setModalTerm, search }) {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        if (language === "Español") {
          if (search === "") {
            const res = await axios.get(
              `${import.meta.env.VITE_BACKEND_URL}/glossary/`
            );
            setTerms(res.data);
          } else {
            const res = await axios.get(
              `${import.meta.env.VITE_BACKEND_URL}/glossary/es/${search}`
            );
            setTerms(res.data);
            console.log("fetched term in spanish", res.data);
          }
        } else {
          if (search === "") {
            const res = await axios.get(
              `${import.meta.env.VITE_BACKEND_URL}/glossary/`
            );
            setTerms(res.data);
          } else {
            const res = await axios.get(
              `${import.meta.env.VITE_BACKEND_URL}/glossary/en/${search}`
            );
            setTerms(res.data);
            console.log("fetched term in english", res.data);
          }
        }
      } catch (err) {
        console.error("Search error:", err);
        setTerms([]);
      }
    };

    fetchTerms();
  }, [search]);

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

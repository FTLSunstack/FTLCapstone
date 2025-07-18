import { useState } from "react";
import "../../../../tailwind.css";
import NavBar from "../../../Common/NavBar/NavBar.jsx";
import Footer from "../../../Common/Footer/Footer.jsx";
import Description from "../Description/GlossaryDescription.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import TermsList from "../TermsList/TermsList.jsx";
import TermModal from "../TermModal/TermModal.jsx";

function GlossaryPage({ language, setLanguage }) {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [modalTerm, setModalTerm] = useState(null);
  const onClick = () => {
    setShow(!show);
    if (modalTerm) {
      setModalTerm(null);
    }
  };

  return (
    <>
      <div className="flex flex-col bg-gray-100 min-h-screen">
        <NavBar language={language} setLanguage={setLanguage} />
        <div className="flex flex-col flex-grow items-center min-w-screen">
          <Description language={language} />
          <SearchBar
            language={language}
            search={search}
            setSearch={setSearch}
          />
          <TermsList
            language={language}
            onClick={onClick}
            setModalTerm={setModalTerm}
            search={search}
          />
        </div>
        <Footer language={language} />
      </div>
      {show && modalTerm && (
        <TermModal language={language} onClose={onClick} term={modalTerm} />
      )}
    </>
  );
}

export default GlossaryPage;

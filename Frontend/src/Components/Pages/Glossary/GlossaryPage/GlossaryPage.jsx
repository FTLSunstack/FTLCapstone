import { useState } from "react";
import "../../../../tailwind.css";
import NavBar from "../../../Common/NavBar/NavBar.jsx";
import Footer from "../../../Common/Footer/Footer.jsx";
import Description from "../Description/GlossaryDescription.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import TermsList from "../TermsList/TermsList.jsx";

function GlossaryPage() {
  return (
    <>
      <NavBar />
      <Description />
      <SearchBar />
      <TermsList />
      <Footer />
    </>
  );
}

export default GlossaryPage;

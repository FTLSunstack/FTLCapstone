import { useState } from "react";
import "../../../../tailwind.css";
import NavBar from "../../../Common/NavBar/NavBar.jsx";
import Footer from "../../../Common/Footer/Footer.jsx";
import CardList from "../CardList/CardList.jsx";
import Description from "../Description/AboutUsDescription.jsx";

function AboutUsPage() {
  return (
    <>
      <NavBar />
      <Description />
      <CardList />
      <Footer />
    </>
  );
}

export default AboutUsPage;

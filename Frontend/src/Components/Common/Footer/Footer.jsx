import { useState } from "react";
import "../../../tailwind.css";

function Footer() {
  return (
    <>
      <div className="flex flex-row items-center justify-center w-screen bg-[#011939] p-10">
        <h1 className="text-gray-400">Codifica</h1>
        <h2 className="text-gray-400 ml-2">
          © 2023 Codifica. Todos los derechos reservados.
        </h2>
      </div>
    </>
  );
}

export default Footer;

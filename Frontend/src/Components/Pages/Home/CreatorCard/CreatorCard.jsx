import { useState } from "react";
import "../../../../tailwind.css";

function CreatorCard({ name, description, img, linkedin }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-90 max-w-180 bg-white p-10 shadow-lg rounded-lg m-5 hover:shadow-xl hover:scale-105 transition-all duration-300">
        <h1 className="text-black text-2xl font-bold text-center pb-4">
          {name}
        </h1>
        <a href={linkedin}>
          <img
            src={img}
            alt={name}
            className="w-64 object-cover rounded-xl hover:opacity-60 transition ease-in-out cursor-pointer"
          />
        </a>
        <p className="text-gray-500 text-center p-4">{description}</p>
      </div>
    </>
  );
}

export default CreatorCard;

import { useState } from "react";
import "../../../../tailwind.css";

function CreatorCard({ name, description, img, linkedin }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-180 bg-white p-10 shadow-lg rounded-xl m-5 hover:shadow-xl hover:scale-105 transition-all duration-300">
        <h1 className="text-black text-2xl font-bold text-center pb-4">
          {name}
        </h1>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <img
            src={img}
            alt={name}
            className="max-w-64 object-cover rounded-xl group-hover:opacity-60 transition ease-in-out cursor-pointer"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold bg-gradient-to-r from-purple-500 to-violet-500 bg-opacity-50 px-4 py-2 rounded-md">
              View LinkedIn
            </p>
          </div>
        </a>
        <p className="text-gray-500 text-center p-4">{description}</p>
      </div>
    </>
  );
}

export default CreatorCard;

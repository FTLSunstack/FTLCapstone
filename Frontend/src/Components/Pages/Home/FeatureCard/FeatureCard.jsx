import { useState } from "react";
import "../../../../tailwind.css";

function FeatureCard({ title, description, img }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-150 bg-white p-10 shadow-lg rounded-lg m-5 hover:shadow-xl hover:scale-105 transition-all duration-300">
        <h1 className="text-black text-2xl font-bold text-center pb-4">
          {title}
        </h1>
        <p className="text-gray-500 text-center p-4">{description}</p>
        <img
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg text-center p-4"
        />
      </div>
    </>
  );
}

export default FeatureCard;

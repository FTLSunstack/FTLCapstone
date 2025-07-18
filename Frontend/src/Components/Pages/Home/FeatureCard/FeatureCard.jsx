import { useState } from "react";
import "../../../../tailwind.css";

function FeatureCard({ title, description, logo }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-150 bg-white p-10 shadow-lg rounded-lg m-5 hover:shadow-xl hover:scale-105 transition-all duration-300">
        <span className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-500 mb-10 rounded-lg flex flex-row justify-center items-center text-4xl">
          {logo}
        </span>
        <h1 className="text-black text-2xl font-bold text-center pb-4">
          {title}
        </h1>
        <p className="text-gray-500 text-center p-4">{description}</p>
      </div>
    </>
  );
}

export default FeatureCard;

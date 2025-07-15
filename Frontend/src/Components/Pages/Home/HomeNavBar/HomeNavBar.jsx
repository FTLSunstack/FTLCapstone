import "../../../../tailwind.css";

import React from "react";

export default function HomeNavBar() {
  return (
    <>
      <div className="bg-white p-5 flex flex-row justify-between items-center border-b border-black">
        <h1 className="text-violet-600 font-bold text-3xl hover:cursor-pointer hover:opacity-70 transition ease-in-out">
          Codifica
        </h1>

        <div className="flex flex-row gap-10">
          <a href="#" className="text-gray-500 hover:text-black">
            Features
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-black transition ease-in-out"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-black transition ease-in-out"
          >
            Get Started
          </a>
        </div>

        <div className="flex flex-row space-x-5">
          <button className="px-5 py-2 outline outline-violet-600 text-violet-600 rounded-md hover:bg-violet-600 hover:text-white hover:cursor-pointer transition ease-in-out">
            Sign In
          </button>
          <button className="bg-red-400 px-5 py-2 bg-violet-500 text-white rounded-md outline outline-white  hover:bg-violet-600 hover:cursor-pointer transition ease-in-out">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

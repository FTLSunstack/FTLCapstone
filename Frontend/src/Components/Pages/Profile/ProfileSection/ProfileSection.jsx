import React, { useEffect, useState } from "react";
import "../../../../tailwind.css";
import mailIcon from "../../../../assets/mail.png";
import axios from "axios";
export default function ProfileSection(props) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {});

  return (
    <div>
      <div className="w-full h-fit flex flex-col justify-center items-center mt-10 gap-10">
        <div className="bg-violet-300 w-1/3 h-fit rounded-xl flex justify-center p-5 shadow-lg hover:bg-violet-500 hover:text-white cursor-pointer hover:scale-102 transition ease-in-out">
          <div className="flex flex-col items-center gap-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
              alt="pfp"
              className="w-20 size-fit hover:opacity-40 transition ease-in-out cursor-pointer"
            />
            <div className="items-center flex flex-col mt-5">
              <h1 className="font-bold text-xl">{props.name}</h1>
              <h2 className="font-semibold text-lg">{props.userName}</h2>
            </div>
          </div>
        </div>

        <div className="bg-violet-300 mt-10 w-1/3 h-fit p-5 rounded-xl shadow-lg hover:bg-violet-500 hover:text-white cursor-pointer hover:scale-102 transition ease-in-out">
          <h1 className="font-bold text-lg">About</h1>
          <div>
            <h2 className="pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </h2>
          </div>
        </div>

        <div className="bg-violet-300 mt-10 w-1/3 h-fit p-5 rounded-xl hover:bg-violet-500 hover:text-white cursor-pointer hover:scale-102 transition ease-in-out">
          <h1 className="font-bold text-lg">Contacts and Links</h1>
          <div className="pt-5 flex flex-col gap-5">
            <div className="flex flex-row gap-2">
              <span className="material-icons">email</span>
              <p>email</p>
            </div>
            <div className="flex flex-row gap-2">
              <span className="material-icons">location_on</span>
              <p>Location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

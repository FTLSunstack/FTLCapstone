import React, { useEffect, useState } from "react";
import "../../../../tailwind.css";
import mailIcon from "../../../../assets/mail.png";
import axios from "axios";
import {
  Mail,
  MapPin,
  Link,
  Edit3,
  Calendar,
  Award,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function ProfileSection(props) {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleEditProfile = () => {
    // navigate("/edit/profile");
    if (props.editProfileModal) {
      props.editProfileModal();
    }
  };

  return (
    <div className=" flex flex-row gap-10 m-5 h-fit justify-center mt-40">
      {/* THIS IS THE PROFILE INFO SECTION */}
      <div className="bg-red-400 h-[700px] w-1/2 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 flex flex-col justify-center items-center gap-10">
        <div className="relative group">
          <Sparkles
            className="w-7 h-7 text-yellow-400 animate-bounce [animation-duration:2.5s]
"
          />
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1024px-Default_pfp.svg.png"
              alt="Profile"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
          <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors cursor-pointer">
            <Edit3 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-4xl text-white font-bold">{props.name}</h2>
          <h2 className="text-xl text-white">@{props.userName}</h2>
        </div>
        <div className="flex flex-row items-center gap-2 group cursor-pointer transition ease-in-out">
          <Calendar className="w-4 h-4 text-white opacity-70 group-hover:opacity-100 transition ease-in-out" />
          <h2 className="text-white opacity-70 group-hover:opacity-100 transition ease-in-out">
            Joined March 2023
          </h2>
        </div>
        <button
          className="px-10 py-4 border border-white/40 text-white rounded-md hover:bg-white/20 backdrop-blur-md hover:cursor-pointer transition ease-in-out drop-shadow-lg"
          onClick={handleEditProfile}
        >
          Edit Profile
        </button>
      </div>

      <div className="flex flex-col justify-start h-[700px] w-1/2 gap-30">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full h-1/3">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Edit3 className="w-6 h-6" />
              About Me
            </h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              {props.about}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6">
            <h2 className="text-xl font-bold text-white">Get In Touch</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
              <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <p className="text-gray-600 text-sm">
                  {props.email || "john@example.com"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
              <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <MapPin className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Location</p>
                <p className="text-gray-600 text-sm">
                  {props.location || "San Francisco, CA"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
              <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                <Link className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">LinkedIn</p>
                <a
                  href={props.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 text-sm hover:underline"
                >
                  {props.website || "johndoe.dev"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import "../../../../tailwind.css";
import { useAuth } from "../../../../Context/AuthContext.jsx";
import React, { useState, useEffect } from "react";
import {
  Camera,
  X,
  User,
  Mail,
  MapPin,
  Globe,
  FileText,
  Save,
  Upload,
} from "lucide-react";
import axios from "axios";

export default function EditProfile({ language, onClose }) {
  const [userData, setUserData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  // Trigger animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Handle close with animation
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300); // Wait for animation to complete
  };

  // Close on overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleUpdateUser = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/users/${user.userId}`,
        {
          location: location,
          aboutMe: bio,
          website: linkedIn,
        },
        {
          withCredentials: true,
        }
      );

      console.log("User updated:", response.data);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return <div>Loading....</div>;
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm transition-all duration-300 ease-in-out ${
        isVisible ? "bg-black/50 opacity-100" : "bg-black/0 opacity-0"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white rounded-lg h-fit w-1/2 transition-all duration-300 ease-in-out transform  ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        <div className="flex flex-row justify-between items-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-lg p-5 text-white">
          <h1 className="text-xl font-bold">Edit Profile</h1>
          <X
            className="h-5 w-5 hover:opacity-40 transition ease-in-out cursor-pointer"
            onClick={handleClose}
          />
        </div>

        <div className="flex flex-col m-10 gap-6">
          <div className="flex flex-col">
            <div className="flex flex-row gap-3 items-center">
              <User className="h-5 w-5" />
              <h1 className="text-lg">Full Name</h1>
            </div>
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 py-3 mt-2 rounded-lg p-5"
              value={user.name}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row gap-3 items-center">
              <span className="">@</span>
              <h1 className="text-lg">Username</h1>
            </div>
            <input
              type="text"
              placeholder="Username"
              className="border border-gray-300 py-3 mt-2 rounded-lg p-5"
              value={user.username}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-3 items-center">
              <Mail className="h-5 w-5" />
              <h1 className="text-lg">Email</h1>
            </div>
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-300 py-3 mt-2 rounded-lg p-5"
              value={user.email}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-3 items-center">
              <MapPin className="h-5 w-5" />
              <h1 className="text-lg">Location</h1>
            </div>
            <input
              type="text"
              placeholder="Location"
              className="border border-gray-300 py-3 mt-2 rounded-lg p-5"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-3 items-center">
              <FileText className="h-5 w-5" />
              <h1 className="text-lg">Bio</h1>
            </div>
            <input
              type="text"
              placeholder="Bio"
              className="border border-gray-300 py-3 mt-2 rounded-lg p-5"
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-3 items-center">
              <Globe className="h-5 w-5" />
              <h1 className="text-lg">LinkedIn</h1>
            </div>
            <input
              type="text"
              placeholder="LinkedIn"
              className="border border-gray-300 py-3 mt-2 rounded-lg p-5"
              onChange={(e) => setLinkedIn(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-gray-100 p-5 rounded-b-lg border-t-1 border-gray-300 flex flex-row justify-between">
          <button
            className="border border-gray-300 px-5 py-2 rounded-md hover:border-gray-400 transition ease-in-out cursor-pointer"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="bg-violet-600 px-5 py-2 text-white rounded-md cursor-pointer hover:opacity-80 transition ease-in-out"
            onClick={handleUpdateUser}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

import "../../../../tailwind.css";
import { useAuth } from "../../../../Context/AuthContext.jsx";
import React, { useState, useEffect } from "react";
import { X, User, Mail, MapPin, Globe, FileText } from "lucide-react";
import axios from "axios";

export default function EditProfile({ language, onClose, onRefresh }) {
  const [isVisible, setIsVisible] = useState(false);

  const { user, updateUser } = useAuth();

  // Use a single state object to hold all editable form data
  const [formData, setFormData] = useState({
    location: "",
    bio: "",
    linkedIn: "",
  });

  // --- NEW: Populate formData ONCE when the modal mounts and 'user' is available ---
  useEffect(() => {
    if (user) {
      setFormData({
        location: user.location ?? "",
        bio: user.aboutMe ?? "", // Ensure 'aboutMe' matches your user object property
        linkedIn: user.website ?? "", // Ensure 'website' matches your user object property
      });
    }
  }, [user]); // This useEffect runs when the 'user' object from AuthContext is initially set or changes

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

  // Handle input changes for the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateUser = async () => {
    try {
      if (!user || !user.userId) {
        console.error("User or User ID is missing. Cannot update profile.");
        // You might want to display a user-friendly error message here
        return;
      }

      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/users/${user.userId}`,
        {
          location: formData.location,
          aboutMe: formData.bio,
          website: formData.linkedIn,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Backend updated user:", response.data);

      const updatedUserFromBackend = response.data.data;

      if (updateUser) {
        updateUser(updatedUserFromBackend); // Update AuthContext
      }

      if (onRefresh) {
        onRefresh(); // Trigger any extra refresh logic in ProfilePage
      }
      handleClose();
    } catch (error) {
      console.error("Error updating user:", error);
      // Add user-friendly error handling here
    }
  };

  if (!user) {
    // This ensures the component's render function (and its useState initializers)
    // only runs once 'user' is guaranteed to be an object.
    return <div>Loading user data...</div>;
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
              className="border border-gray-300 py-3 mt-2 rounded-lg p-5 bg-gray-100 cursor-not-allowed"
              value={user.name ?? ""} // Still safely displays current user's name
              readOnly
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
              className="border border-gray-300 py-3 mt-2 rounded-lg p-5 bg-gray-100 cursor-not-allowed"
              value={user.username ?? ""} // Still safely displays current user's username
              readOnly
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
              className="border border-gray-300 py-3 mt-2 rounded-lg p-5 bg-gray-100 cursor-not-allowed"
              value={user.email ?? ""} // Still safely displays current user's email
              readOnly
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
              name="location" // ADDED name attribute
              value={formData.location} // BIND TO formData
              onChange={handleChange} // USE generic handleChange
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
              name="bio" // ADDED name attribute
              value={formData.bio} // BIND TO formData
              onChange={handleChange} // USE generic handleChange
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
              name="linkedIn" // ADDED name attribute
              value={formData.linkedIn} // BIND TO formData
              onChange={handleChange} // USE generic handleChange
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

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
        className={`bg-white rounded-2xl shadow-2xl w-11/12 sm:w-3/4 lg:w-1/2 transition-all duration-300 ease-in-out transform ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center bg-gradient-to-r from-indigo-400 to-purple-400 rounded-t-2xl px-6 py-4 text-white">
          <h1 className="text-xl font-bold">Edit Profile</h1>
          <X
            className="h-5 w-5 hover:opacity-50 cursor-pointer transition"
            onClick={handleClose}
          />
        </div>

        {/* Form */}
        <div className="flex flex-col gap-6 px-8 py-6">
          {[
            {
              icon: <User className="h-5 w-5" />,
              label: "Full Name",
              value: user.name,
              name: "",
              readOnly: true,
            },
            {
              icon: <span>@</span>,
              label: "Username",
              value: user.username,
              name: "",
              readOnly: true,
            },
            {
              icon: <Mail className="h-5 w-5" />,
              label: "Email",
              value: user.email,
              name: "",
              readOnly: true,
            },
            {
              icon: <MapPin className="h-5 w-5" />,
              label: "Location",
              value: formData.location,
              name: "location",
            },
            {
              icon: <FileText className="h-5 w-5" />,
              label: "Bio",
              value: formData.bio,
              name: "bio",
            },
            {
              icon: <Globe className="h-5 w-5" />,
              label: "LinkedIn",
              value: formData.linkedIn,
              name: "linkedIn",
            },
          ].map(({ icon, label, value, name, readOnly = false }) => (
            <div key={label} className="flex flex-col">
              <div className="flex items-center gap-3 text-purple-700">
                {icon}
                <h2 className="text-lg font-semibold">{label}</h2>
              </div>
              <input
                type="text"
                placeholder={label}
                value={value ?? ""}
                name={name}
                readOnly={readOnly}
                onChange={!readOnly ? handleChange : undefined}
                className={`py-3 px-5 mt-2 rounded-lg border ${
                  readOnly
                    ? "bg-gray-100 cursor-not-allowed border-gray-300"
                    : "bg-white border-purple-300 focus:ring-2 focus:ring-purple-300"
                } transition`}
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-sm border-t border-gray-200 rounded-b-2xl">
          <button
            onClick={handleClose}
            className="px-5 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdateUser}
            className="px-5 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 hover:opacity-80 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

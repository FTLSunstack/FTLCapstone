import React, { useEffect, useState } from "react";
import "../../../../tailwind.css";
import mailIcon from "../../../../assets/mail.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash } from "lucide-react";
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

export default function ProfileSection(props) {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleEditProfile = () => {
    if (props.editProfileModal) {
      props.editProfileModal();
    }
  };

  const handleEditSnippet = (snippet) => {
    console.log("Editing snippet in Profile Section:", snippet);
    props.setSnippetData(snippet);
    if (props.editSnippetModal) {
      props.editSnippetModal();
    }
  };

  async function handleDelete(id) {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/code/snippet/${id}`
      );
      console.log("Deleted successfully:", response.data);
      props.setSnippets((prev) => prev.filter((s) => s.id !== id));
    } catch (error) {
      console.error("Failed to delete snippet:", error);
    }
  }

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/code/${props.userId}`,
          { withCredentials: true }
        );
        props.setSnippets(response.data);
      } catch (err) {
        console.error("Failed to fetch snippets:", err);
      }
    };

    if (props.userId) fetchSnippets();
  }, [props.userId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-purple-700 via-violet-600 to-blue-600 py-10 px-5">
      <div className="flex flex-col md:items-stretch items-center h-[700px] md:flex-row w-full h-full max-w-7xl gap-10">
        {/* Profile Info Section */}
        <div className="flex-1 w-full md:w-1/2 rounded-3xl bg-gradient-to-r from-indigo-400 to-purple-400 flex flex-col justify-center items-center gap-10 p-10 shadow-xl">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
              <img
                src="https://adamchang.com/wp-content/uploads/2022/05/Tokyo-Olympics_Astro-Statics_large__Medal-Pose-1.png"
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
              {(() => {
                const formatted = new Date(props.createdAt).toLocaleDateString(
                  props.language === "Español" ? "es-ES" : "en-US",
                  { month: "long", year: "numeric" }
                );
                return formatted.charAt(0).toUpperCase() + formatted.slice(1);
              })()}
            </h2>
          </div>
          <button
            className="px-10 py-4 border border-white/40 text-white rounded-md hover:bg-white/20 backdrop-blur-md hover:cursor-pointer transition ease-in-out drop-shadow-lg"
            onClick={handleEditProfile}
          >
            {props.language === "Español" ? "Editar Perfil" : "Edit Profile"}
          </button>
        </div>

        {/* About + Contact Section */}
        <div className="flex flex-1 flex-col h-full justify-start w-full md:w-1/2 gap-6">
          {/* About Me Section */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full h-1/3">
            <div className=" bg-gradient-to-r from-indigo-400 to-purple-400 p-5">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                {props.language === "Español" ? "Sobre mí" : "About Me"}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                {props.about}
              </p>
            </div>
          </div>
          {/* Other Information Section */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full">
            <div className=" bg-gradient-to-r from-indigo-400 to-purple-400 p-5">
              <h2 className="text-2xl font-bold text-white">
                {props.language === "Español"
                  ? "Otra Información"
                  : "Other Information"}
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">
                    {props.language === "Español"
                      ? "Correo Electrónico"
                      : "Email"}
                  </p>
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
                  <p className="font-medium text-gray-800">
                    {props.language === "Español" ? "Ubicación" : "Location"}
                  </p>
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

      {/* Snippet Carousel */}
      <div className="w-full max-w-7xl mt-10 mx-auto">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full">
          {/* HEADER */}
          <div className=" bg-gradient-to-r from-indigo-400 to-purple-400 p-6">
            <h2 className="text-3xl font-bold text-white text-center">
              {props.language === "Español" ? "Código Guardado" : "Saved Code"}
            </h2>
          </div>

          {/* CONTENT */}
          <div className="p-6">
            {props.snippets.length > 0 ? (
              <div className="flex overflow-x-auto gap-4 pb-2 px-2">
                {props.snippets.map((snippet, idx) => (
                  <div
                    key={idx}
                    className="relative min-w-[300px] bg-gray-50 shadow-inner rounded-xl p-4 border border-gray-200 hover:shadow-md transition duration-300"
                  >
                    {/* Top-right edit/delete buttons */}
                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                      <button
                        onClick={() => handleEditSnippet(snippet)}
                        className="p-1 rounded-full bg-purple-100 hover:bg-purple-200 transition"
                        title={props.language === "Español" ? "Editar" : "Edit"}
                      >
                        <Pencil className="w-4 h-4 text-purple-600" />
                      </button>
                      <button
                        onClick={() => handleDelete(snippet.id)}
                        className="p-1 rounded-full bg-red-100 hover:bg-red-200 transition"
                        title={
                          props.language === "Español" ? "Eliminar" : "Delete"
                        }
                      >
                        <Trash className="w-4 h-4 text-red-600" />
                      </button>
                    </div>

                    {/* Snippet content */}
                    <h3 className="text-lg font-semibold text-indigo-700">
                      {snippet.title ||
                        (props.language === "Español"
                          ? "Fragmento sin título"
                          : "Untitled Snippet")}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {snippet.notes ||
                        (props.language === "Español"
                          ? "Sin notas"
                          : "No notes")}
                    </p>
                    <pre className="bg-white p-2 rounded text-sm overflow-x-auto max-h-40 whitespace-pre-wrap border border-gray-200">
                      {snippet.code}
                    </pre>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center">
                {props.language === "Español"
                  ? "Aún no se han guardado fragmentos."
                  : "No snippets saved yet."}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

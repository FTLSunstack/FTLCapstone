import "../../../../tailwind.css";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";

export default function EditSnippet({
  language,
  onClose,
  onRefresh,
  snippetData,
  setSnippetData,
  setSnippets,
  onUpdateSnippet,
}) {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Handle close with animation
  const handleClose = () => {
    setSnippetData(null);
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

  async function handleUpdateSnippet(codeId) {
    try {
      if (!snippetData || !snippetData.code || !snippetData.title) {
        console.warn("Missing snippet data");
        return;
      }

      console.log("Editing snippet in Edit Profile:", snippetData);

      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/code/snippet/${codeId}`,
        snippetData
      );
      const updatedSnippet = response.data;

      // 🧠 Notify parent component to update the snippets list
      if (onUpdateSnippet) {
        onUpdateSnippet(updatedSnippet);
      }

      handleClose();
      console.log("Edit successful:", response.data);
    } catch (error) {
      console.error("Failed to edit snippet:", error);
    }
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
          <h1 className="text-xl font-bold">
            {language === "Español"
              ? "Editar Fragmento de Código"
              : "Edit Code Snippet"}
          </h1>
          <X
            className="h-5 w-5 hover:opacity-50 cursor-pointer transition"
            onClick={handleClose}
          />
        </div>

        <div className="flex flex-col gap-4 px-8 py-6">
          <div>
            <h2 className="text-lg font-semibold text-purple-700">
              {language === "Español" ? "Título" : "Title"}
            </h2>
            <input
              type="text"
              placeholder={
                language === "Español"
                  ? "Título del Fragmento"
                  : "Snippet Title"
              }
              value={snippetData?.title || ""}
              onChange={(e) =>
                setSnippetData((prev) => ({ ...prev, title: e.target.value }))
              }
              className="py-3 px-5 mt-2 w-full rounded-lg border border-purple-300 bg-white focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-purple-700">
              {language === "Español" ? "Notas" : "Notes"}
            </h2>
            <textarea
              placeholder={
                language === "Español" ? "Agregar notas..." : "Add notes..."
              }
              value={snippetData?.notes || ""}
              onChange={(e) =>
                setSnippetData((prev) => ({ ...prev, notes: e.target.value }))
              }
              rows={3}
              className="py-3 px-5 mt-2 w-full rounded-lg border border-purple-300 bg-white focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-purple-700">
              {language === "Español" ? "Codigo" : "Code"}
            </h2>
            <textarea
              placeholder={
                language === "Español" ? "Tu codigo..." : "Your code..."
              }
              value={snippetData?.code || ""}
              onChange={(e) =>
                setSnippetData((prev) => ({ ...prev, code: e.target.value }))
              }
              rows={6}
              className="py-3 px-5 mt-2 w-full font-mono rounded-lg border border-purple-300 bg-gray-50 focus:ring-2 focus:ring-purple-300 transition"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-sm border-t border-gray-200 rounded-b-2xl">
          <button
            onClick={handleClose}
            className="px-5 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            {language === "Español" ? "Cancelar" : "Cancel"}
          </button>
          <button
            onClick={() => handleUpdateSnippet(snippetData.id)}
            className="px-5 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 hover:opacity-80 transition"
          >
            {language === "Español" ? "Guardar Cambios" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

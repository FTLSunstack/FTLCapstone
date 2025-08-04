import "../../../../tailwind.css";
import { useState, useEffect } from "react";

function SaveModal({
  isOpen,
  onClose,
  onSubmit,
  title,
  setTitle,
  notes,
  setNotes,
  language,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300);
  };

  if (!isOpen && !isVisible) return null;

  return (
    <>
      {language === "English" ? (
        <div
          className={`fixed inset-0 bg-black/40 flex items-center justify-center z-50 transition-all duration-300 ease-in-out ${
            isVisible ? "bg-black/50 opacity-100" : "bg-black/0 opacity-0"
          }`}
          onClick={handleClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md border-t-8 border-purple-500 animate-fade-in transition-all duration-300 ease-in-out ${
              isVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
            }`}
          >
            <h2 className="text-xl font-bold text-purple-600 mb-4 text-center">
              Save Code Snippet
            </h2>
            <label className="block mb-2 font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="My snippet title"
            />
            <label className="block mb-2 font-medium">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              rows={4}
              placeholder="Optional notes"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleClose}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={onSubmit}
                className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`fixed inset-0 bg-black/40 flex items-center justify-center z-50 transition-all duration-300 ease-in-out ${
            isVisible ? "bg-black/50 opacity-100" : "bg-black/0 opacity-0"
          }`}
          onClick={handleClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md border-t-8 border-purple-500 animate-fade-in transition-all duration-300 ease-in-out ${
              isVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
            }`}
          >
            <h2 className="text-xl font-bold text-purple-600 mb-4 text-center">
              Guardar fragmento de código
            </h2>
            <label className="block mb-2 font-medium">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Título del fragmento"
            />
            <label className="block mb-2 font-medium">Notas</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              rows={4}
              placeholder="Notas opcionales"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleClose}
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
              >
                Cancelar
              </button>
              <button
                onClick={onSubmit}
                className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-700 transition"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SaveModal;

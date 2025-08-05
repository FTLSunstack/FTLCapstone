import React from "react";
import "../../../../tailwind.css";
import SaveModal from "../SaveModal/SaveModal";
import { useAuth } from "../../../../Context/AuthContext";
import { EditorView, basicSetup } from "codemirror";
import { barf } from "thememirror";
import { python } from "@codemirror/lang-python";
import { useEffect, useRef, useState } from "react";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { indentWithTab } from "@codemirror/commands";
import { keymap, logException } from "@codemirror/view";
import axios from "axios";
import { Sparkles } from "lucide-react";
import {
  NotifSuccess,
  NotifError,
} from "../../../Common/ToastNotifs/ToastNotifs";

export default function CodeEditor({
  initialCode = "print('Hello world')",
  onChange,
  language,
  onLoading,
  onOutput,
  onResult,
  onError,
  onRun,
  onInput,
  codeInput,
  setCodeInput,
}) {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [result, setResult] = useState("");
  const [explanationHovered, setExplanationHovered] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [snippetTitle, setSnippetTitle] = useState("");
  const [snippetNotes, setSnippetNotes] = useState("");
  // const [codeInput, setCodeInput] = useState("");

  const { user } = useAuth();

  const handleExplanation = () => {
    const currentCode = viewRef.current.state.doc.toString();
    if (onRun) onRun(currentCode);
  };

  const handleSubmit = async () => {
    if (viewRef.current) {
      const currentCode = viewRef.current.state.doc.toString();
      const formattedCode = currentCode.replace(/\n/g, "\n");

      setLoading(true);
      if (onLoading) onLoading(true);

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/run-code`,
          {
            source_code: formattedCode, // Changed from 'code' to 'source_code'
            language_name: "python", // Changed from 'language' to 'language_name'
            stdin: onInput, // Added stdin field
            timeout: 10000,
          }
        );
        console.log("Response is", response.data);
        setResult(response.data);
        if (response.data.stderr) {
          setError(response.data.stderr);
          if (onError) onError(response.data.stderr);
          setOutput("");
        } else if (response.data.compile_output) {
          setError(response.data.compile_output);
          if (onError) onError(response.data.compile_output);
          setOutput("");
        } else {
          // No errors, even if output is empty
          setOutput(
            response.data.stdout || "✅ Code ran successfully with no output."
          );
          if (onOutput)
            onOutput(
              response.data.stdout || "✅ Code ran successfully with no output."
            );
          setError("");
          if (onError) onError("");
        }
      } catch (error) {
        console.log("The error is: ", error);
      }
      setLoading(false);
      if (onLoading) onLoading(false);

      if (onChange) {
        onChange(currentCode);
      }
    }
    // console.log("Submit Code was ran");
  };

  const handleSaveClick = () => {
    setShowSaveModal(true);
  };

  const handleSnippetSubmit = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/code/${user.userId}`,
        {
          code: codeInput,
          language: "English",
          codeLang: "Python",
          title: snippetTitle,
          notes: snippetNotes,
        },
        { withCredentials: true }
      );
      NotifSuccess("Saved Snippet");
      console.log("Saved snippet:", res.data);
      setShowSaveModal(false);
      setSnippetTitle("");
      setSnippetNotes("");
    } catch (err) {
      console.error("Save failed:", err);
      NotifError("Saved Snippet");
    }
  };

  useEffect(() => {
    if (editorRef.current && !viewRef.current) {
      // Python completions
      const pythonCompletions = [
        { label: "print", type: "function", info: "Print to console" },
        { label: "len", type: "function", info: "Get length of object" },
        { label: "range", type: "function", info: "Generate range of numbers" },
        { label: "for", type: "keyword", info: "For loop" },
        { label: "if", type: "keyword", info: "If statement" },
        { label: "elif", type: "keyword", info: "Else if statement" },
        { label: "else", type: "keyword", info: "Else statement" },
        { label: "def", type: "keyword", info: "Define function" },
        { label: "class", type: "keyword", info: "Define class" },
        { label: "import", type: "keyword", info: "Import module" },
        { label: "from", type: "keyword", info: "From import" },
        { label: "return", type: "keyword", info: "Return statement" },
        { label: "True", type: "keyword", info: "Boolean True" },
        { label: "False", type: "keyword", info: "Boolean False" },
        { label: "None", type: "keyword", info: "None value" },
      ];

      // Custom autocompletion
      const pythonAutocompletion = autocompletion({
        override: [
          (context) => {
            const word = context.matchBefore(/\w*/);
            if (!word) return null;
            if (word.from === word.to && !context.explicit) return null;

            return {
              from: word.from,
              options: pythonCompletions.filter((completion) =>
                completion.label.startsWith(word.text)
              ),
            };
          },
        ],
      });

      const editorLayoutTheme = EditorView.theme({
        "&": {
          height: "100%", // Make the editor take 100% height of its parent
          overflow: "hidden", // Crucial for rounded corners to hide overflowing content
          borderRadius: "0.5rem",
          // display: "flex",
          // flexDirection: "column",
        },
        ".cm-scroller": {
          // flexGrow: 1,
          overflow: "auto", // Ensure scrolling works within the fixed height
        },
        // If the line numbers or gutters are not rounded correctly, you might need these
        ".cm-gutters": {
          borderTopLeftRadius: "0.5rem",
          borderBottomLeftRadius: "0.5rem",
        },
        ".cm-content": {
          fontSize: "15px",
        },
      });

      viewRef.current = new EditorView({
        doc: codeInput || initialCode,
        extensions: [
          basicSetup, // This automatically adds line numbers, syntax highlighting, etc.
          python(),
          pythonAutocompletion,
          barf,
          editorLayoutTheme,
          keymap.of([indentWithTab, ...completionKeymap]), // Tab for indent, Enter/Tab for completions
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              const newCode = update.state.doc.toString();
              setCodeInput(newCode); // Update parent state with new code
            }
          }),
        ],
        parent: editorRef.current,
      });
    }
    return () => {
      if (viewRef.current) {
        viewRef.current.destroy();
        viewRef.current = null;
      }
      console.log("codeInput updated:", codeInput);
    };
  }, [initialCode]);

  return (
    <div>
      <div className="relative w-full max-w-[900px] h-[400px] max-h-[500px] min-h-[300px] mx-auto shadow-4xl">
        <div
          ref={editorRef}
          className="w-full h-full"
          style={{ outline: "none" }}
        />
        <div className="">
          <button
            className="absolute bottom-2 left-2 bg-purple-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-purple-700 hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden"
            onClick={handleExplanation}
          >
            {language === "English" ? <h1>Explain</h1> : <h1>Explicar</h1>}
          </button>
          <button
            className="absolute top-2 right-2 bg-purple-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-purple-700 hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden"
            onClick={handleSaveClick}
          >
            {language === "English" ? (
              <h1>Save Code</h1>
            ) : (
              <h1>Guardar Codigo</h1>
            )}
          </button>
          <button
            className="absolute bottom-2 right-2 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 hover:scale-105 hover:cursor-pointer transition flex items-center gap-1"
            onClick={handleSubmit}
          >
            <span className="material-icons">play_arrow</span>
            {language === "English" ? "Run" : "Ejecutar"}
          </button>
        </div>
      </div>
      <SaveModal
        isOpen={showSaveModal}
        onClose={() => setShowSaveModal(false)}
        onSubmit={handleSnippetSubmit}
        title={snippetTitle}
        setTitle={setSnippetTitle}
        notes={snippetNotes}
        setNotes={setSnippetNotes}
        language={language}
      />
    </div>
  );
}

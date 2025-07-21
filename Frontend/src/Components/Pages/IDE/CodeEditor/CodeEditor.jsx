import React from "react";
import "../../../../tailwind.css";

import { EditorView, basicSetup } from "codemirror";
import { python } from "@codemirror/lang-python";
import { useEffect, useRef, useState } from "react";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { indentWithTab } from "@codemirror/commands";
import { keymap, logException } from "@codemirror/view";
import axios from "axios";

export default function CodeEditor({
  initialCode = "print('Hello world')",
  onChange,
  language,
  onLoading,
  onOutput,
  onResult,
  onError,
  onRun,
}) {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    if (viewRef.current) {
      const currentCode = viewRef.current.state.doc.toString();
      const formattedCode = currentCode.replace(/\n/g, "\n");

      if (onRun) onRun(currentCode);

      setLoading(true);
      if (onLoading) onLoading(true);

      try {
        const response = await axios.post(
          "http://localhost:3000/api/run-code",
          {
            source_code: formattedCode, // Changed from 'code' to 'source_code'
            language_name: "python", // Changed from 'language' to 'language_name'
            stdin: "", // Added stdin field
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

      const customTheme = EditorView.theme({
        "&": {
          color: "#e5e5e5",
          backgroundColor: "#1a1a1a",
          borderRadius: "0.5rem",
          height: "600px",
          overflow: "hidden",
        },
        ".cm-content": {
          padding: "10px",
          color: "#e5e5e5",
        },
        ".cm-focused": {
          outline: "none",
        },
        ".cm-editor": {
          fontSize: "12px",
        },
        ".cm-scroller": {
          fontFamily: "'Fira Code', 'JetBrains Mono', 'Consolas', monospace",
        },
        ".cm-lineNumbers": {
          color: "#888888",
          backgroundColor: "#2a2a2a",
          borderTopLeftRadius: "0.5rem", // Add this for top-left corner
          borderBottomLeftRadius: "0.5rem", // Add this for bottom-left corner
        },
        ".cm-lineNumbers .cm-gutterElement": {
          color: "white",
        },
        ".cm-activeLine": {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        },
        ".cm-activeLineGutter": {
          backgroundColor: "rgba(52, 52, 52, 0.08)",
        },
        ".cm-gutters": {
          backgroundColor: "#2a2a2a",
          borderRight: "1px solid #3a3a3a",
          borderTopLeftRadius: "0.5rem", // Add this for top-left corner
          borderBottomLeftRadius: "0.5rem", // Add this for bottom-left corner
        },
        ".cm-gutter .cm-foldGutter": {
          backgroundColor: "black",
        },
        // ... rest of your theme remains the same
      });
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

      viewRef.current = new EditorView({
        doc: initialCode,
        extensions: [
          basicSetup, // This automatically adds line numbers, syntax highlighting, etc.
          python(),
          pythonAutocompletion,
          customTheme,
          keymap.of([indentWithTab, ...completionKeymap]), // Tab for indent, Enter/Tab for completions
        ],
        parent: editorRef.current,
      });
    }
    return () => {
      if (viewRef.current) {
        viewRef.current.destroy();
        viewRef.current = null;
      }
    };
  }, [initialCode]);

  return (
    <div>
      {language === "English" ? (
        <div className="relative w-[800px] h-[600px] m-8">
          <div
            ref={editorRef}
            className="w-full h-full"
            style={{ outline: "none" }}
          />
          <button
            className="absolute bottom-2 right-2 bg-violet-400 text-white px-4 py-2 rounded hover:bg-violet-500 hover:cursor-pointer transition"
            onClick={handleSubmit}
          >
            Run Code
          </button>
        </div>
      ) : (
        <div className="relative w-[800px] h-[600px] m-8">
          <div
            ref={editorRef}
            className="w-full h-full"
            style={{ outline: "none" }}
          />
          <button
            className="absolute bottom-2 right-2 bg-violet-400 text-white px-4 py-2 rounded hover:bg-violet-500 hover:cursor-pointer transition"
            onClick={handleSubmit}
          >
            Ejecutar código
          </button>
        </div>
      )}
    </div>
  );
}

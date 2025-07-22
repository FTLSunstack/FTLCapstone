import { use, useState, useEffect } from "react";
import axios from "axios";
import Term from "../Term/Term.jsx";
import "../../../../tailwind.css";

function TermsList({ language, onClick, setModalTerm, search }) {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        if (search === "") {
          const res = await axios.get("http://localhost:3000/glossary/");
          setTerms(res.data);
        } else {
          const res = await axios.get(
            `http://localhost:3000/glossary/${search}`
          );
          setTerms(res.data);
        }
      } catch (err) {
        console.error("Search error:", err);
        setTerms([]);
      }
    };

    fetchTerms();
  }, [search]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-10 max-w-4/5">
        {Object.entries(terms).map(([key, t]) => (
          <Term
            key={key}
            term={t}
            language={language}
            onClick={onClick}
            setModalTerm={setModalTerm}
          />
        ))}
      </div>
    </>
  );
}

export default TermsList;

// const temp = [
//   {
//     term: "Variable",
//     translation: "Variable",
//     definition_en:
//       "A variable is a container for storing a value to be used later.",
//     definition_es:
//       "Una variable es un espacio en memoria donde se puede almacenar un valor para usarlo más adelante.",
//     example_en: "let name = 'Ana';",
//     example_es: "let nombre = 'Ana';",
//   },
//   {
//     term: "Function",
//     translation: "Función",
//     definition_en:
//       "A function is a reusable block of code that performs a specific task.",
//     definition_es:
//       "Una función es un bloque de código reutilizable que realiza una tarea específica.",
//     example_en: "function greet() { console.log('Hello'); }",
//     example_es: "function saludar() { console.log('Hola'); }",
//   },
//   {
//     term: "Array",
//     translation: "Arreglo",
//     definition_en:
//       "An array is an ordered collection of elements that can be of any data type.",
//     definition_es:
//       "Un arreglo es una colección ordenada de elementos, que pueden ser de cualquier tipo de dato.",
//     example_en: "let numbers = [1, 2, 3, 4];",
//     example_es: "let numeros = [1, 2, 3, 4];",
//   },
//   {
//     term: "Loop",
//     translation: "Bucle",
//     definition_en:
//       "A loop allows you to repeatedly execute a block of code as long as a condition is met.",
//     definition_es:
//       "Un bucle permite ejecutar repetidamente un bloque de código mientras se cumpla una condición.",
//     example_en: "for (let i = 0; i < 5; i++) { console.log(i); }",
//     example_es: "for (let i = 0; i < 5; i++) { console.log(i); }",
//   },
//   {
//     term: "Condition",
//     translation: "Condición",
//     definition_en:
//       "A condition evaluates whether an expression is true or false to decide what code to execute.",
//     definition_es:
//       "Una condición evalúa si una expresión es verdadera o falsa para decidir qué código ejecutar.",
//     example_en: "if (age >= 18) { console.log('Adult'); }",
//     example_es: "if (edad >= 18) { console.log('Mayor de edad'); }",
//   },
//   {
//     term: "Object",
//     translation: "Objeto",
//     definition_en:
//       "An object is a structure that groups related values using key-value pairs.",
//     definition_es:
//       "Un objeto es una estructura que permite agrupar valores relacionados mediante pares clave-valor.",
//     example_en: "let person = { name: 'Luis', age: 25 };",
//     example_es: "let persona = { nombre: 'Luis', edad: 25 };",
//   },
//   {
//     term: "Class",
//     translation: "Clase",
//     definition_en:
//       "A class is a blueprint for creating objects with specific properties and methods.",
//     definition_es:
//       "Una clase es un molde para crear objetos con propiedades y métodos específicos.",
//     example_en: "class Animal { constructor(name) { this.name = name; } }",
//     example_es:
//       "class Animal { constructor(nombre) { this.nombre = nombre; } }",
//   },
//   {
//     term: "Boolean",
//     translation: "Booleano",
//     definition_en: "A boolean value can only be true or false.",
//     definition_es:
//       "Un valor booleano solo puede ser verdadero (true) o falso (false).",
//     example_en: "let isActive = true;",
//     example_es: "let estaActivo = true;",
//   },
//   {
//     term: "Null",
//     translation: "Nulo",
//     definition_en:
//       "Null represents the intentional absence of any object value.",
//     definition_es: "Nulo representa la ausencia intencional de un valor.",
//     example_en: "let result = null;",
//     example_es: "let resultado = null;",
//   },
//   {
//     term: "While Loop",
//     translation: "Bucle While",
//     definition_en:
//       "A while loop executes a block of code as long as the condition is true.",
//     definition_es:
//       "Un bucle while ejecuta un bloque de código mientras una condición sea verdadera.",
//     example_en: "while (count < 3) { console.log(count); count++; }",
//     example_es: "while (contador < 3) { console.log(contador); contador++; }",
//   },
// ];

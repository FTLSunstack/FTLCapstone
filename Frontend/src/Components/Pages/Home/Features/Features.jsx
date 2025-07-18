import { useState } from "react";
import "../../../../tailwind.css";
import FeatureCard from "../FeatureCard/FeatureCard.jsx";

function Features({ language }) {
  return (
    <>
      {language === "Español" ? (
        <div className="flex flex-col items-center justify-center w-screen bg-gray-50 p-20">
          <h1 className="text-black text-4xl font-bold pb-8 text-center">
            Porque Codifica?
          </h1>
          <h2 className="text-gray-500 text-2xl text-center px-20">
            Entendemos que aprender a codificar no debe estar limitado por el
            idioma. Nuestra plataforma hace que la programación sea accesible
            para todos, independientemente de su dominio del inglés.
          </h2>
          <div className="flex flex-row justify-center my-10">
            <FeatureCard
              title="IDE Integrado"
              description="Nuestro IDE integrado te permite escribir, ejecutar y probar 
            código directamente desde tu navegador. Compatible con varios lenguajes de 
            programación, es ideal para aprender de forma interactiva y practicar en tiempo real."
              logo="🧠"
            />
            <FeatureCard
              title="Explicaciones en Español"
              description="Aprende de forma clara y sin barreras. Con el apoyo de 
            inteligencia artificial, ofrecemos explicaciones en español o en inglés 
            que te guían paso a paso para entender conceptos clave de programación."
              logo="👩‍🏫"
            />
            <FeatureCard
              title="Glosario de Términos Clave"
              description="Explora definiciones y ejemplos de los términos más importantes en programación. 
            Nuestro glosario bilingüe te ayuda a entender cada concepto en inglés y español."
              logo="📖"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-screen bg-gray-50 p-20">
          <h1 className="text-black text-4xl font-bold pb-8 text-center">
            Why Codifica?
          </h1>
          <h2 className="text-gray-500 text-2xl text-center px-20">
            We understand that learning to code should not be limited by
            language. Our platform makes programming accessible for everyone,
            regardless of their proficiency in English.
          </h2>
          <div className="flex flex-row justify-center my-10">
            <FeatureCard
              title="Integrated IDE"
              description="Our integrated IDE allows you to write, run, and test code directly from your browser. 
                Compatible with multiple programming languages, it is ideal for interactive learning and real-time practice."
              img=""
            />
            <FeatureCard
              title="Explanations in Spanish"
              description="Learn clearly and without barriers. With the support of artificial intelligence, 
                we provide explanations in Spanish or English that guide you step by step to understand key programming concepts."
              img=""
            />
            <FeatureCard
              title="Glossary of Key Terms"
              description="Explore definitions and examples of the most important programming terms. 
                Our bilingual glossary helps you understand each concept in both English and Spanish."
              img=""
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Features;

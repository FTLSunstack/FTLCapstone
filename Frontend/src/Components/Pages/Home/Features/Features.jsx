import { useState } from "react";
import "../../../../tailwind.css";
import FeatureCard from "../FeatureCard/FeatureCard.jsx";

function Features({ language }) {
  return (
    <>
      {language === "Español" ? (
        <div className="flex flex-col items-center justify-center w-full bg-gray-50 px-8 py-20 sm:p-20">
          <h1 className="text-black text-4xl font-bold pb-8 text-center px-10">
            ¿Por qué Codifica?
          </h1>
          <h2 className="text-gray-500 text-2xl text-center max-w-5xl px-10">
            Entendemos que aprender a codificar no debe estar limitado por el
            idioma. Nuestra plataforma hace que la programación sea accesible
            para todos, independientemente de su dominio del inglés.
          </h2>
          <div className="flex flex-wrap md:flex-nowrap justify-center my-10">
            <FeatureCard
              title="IDE Integrado"
              description="Nuestro IDE integrado te permite escribir, ejecutar y probar 
            código directamente desde tu navegador. Es ideal para aprender de forma interactiva y practicar en tiempo real."
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
        <div className="flex flex-col items-center justify-center w-full bg-gray-50 px-8 py-20 sm:p-20">
          <h1 className="text-black text-4xl font-bold pb-8 text-center px-10">
            Why Codifica?
          </h1>
          <h2 className="text-gray-500 text-2xl text-center max-w-5xl px-10">
            We understand that learning to code should not be limited by
            language. Our platform makes programming accessible for everyone,
            regardless of their proficiency in English.
          </h2>
          <div className="flex flex-wrap md:flex-nowrap justify-center my-10">
            <FeatureCard
              title="Integrated IDE"
              description="Our integrated IDE allows you to write, run, and test code directly from your browser. 
                It is perfect for interactive learning and real-time practice."
              logo="🧠"
            />
            <FeatureCard
              title="Explanations in Spanish"
              description="Learn clearly and without barriers. With the support of artificial intelligence, 
                we provide explanations in Spanish or English that guide you step by step to understand key programming concepts."
              logo="👩‍🏫"
            />
            <FeatureCard
              title="Glossary of Key Terms"
              description="Explore definitions and examples of the most important programming terms. 
                Our bilingual glossary helps you understand each concept in both English and Spanish."
              logo="📖"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Features;

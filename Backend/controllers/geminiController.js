require("dotenv").config();
const { GoogleGenAI, Type } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const explainCode = async (req, res) => {
  try {
    const { codeSnippet, language = "python" } = req.body;

    if (!codeSnippet) {
      return res.status(400).json({
        success: false,
        error: "Code snippet is required",
      });
    }

    const prompt = `Given the following ${language} code: ${codeSnippet}, provide a comprehensive explanation in Spanish.

Create a JSON object with the following properties:
1. "code": The ORIGINAL and EXACT code from the input, without any modifications.
2. "explanation": A detailed explanation in Spanish that covers:
   - What the overall program does and its purpose
   - How the main components/functions work together
   - Key programming concepts being used
   - The flow of execution
   - Any important details about the implementation

The explanation should be thorough but accessible, written in clear Spanish.

Return ONLY the JSON object. Do not include any introductory or concluding remarks, or any other text.

Here is an example of the desired JSON format:

{
  "code": "print(\\"Hello, World!\\")\\nx = 10 + 5\\nprint(x)",
  "explanation": "Este programa demuestra conceptos básicos de Python. Primero imprime el mensaje 'Hello, World!' en la consola, que es una tradición en programación para mostrar el primer programa funcional. Luego crea una variable llamada 'x' y le asigna el resultado de sumar 10 y 5, que es 15. Finalmente imprime el valor de esta variable. El programa ilustra la salida de texto, operaciones aritméticas básicas, asignación de variables y cómo mostrar el contenido de una variable."
}`;
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT, 
          properties: {
            code: {
              // Changed from codeline to code
              type: Type.STRING,
            },
            explanation: {
              type: Type.STRING,
            },
          },
        },
      },
    });

    const explanation = JSON.parse(response.text);

    res.json({
      success: true,
      explanation,
      usage: response.usage_metadata,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to explain code",
    });
  }
};

module.exports = { explainCode };

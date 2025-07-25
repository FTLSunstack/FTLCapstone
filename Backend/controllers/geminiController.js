require("dotenv").config();
const { GoogleGenAI, Type } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const explainCode = async (req, res) => {
  try {
    const { codeSnippet, language = "python", humanLanguage } = req.body;

    if (!codeSnippet) {
      return res.status(400).json({
        success: false,
        error: "Code snippet is required",
      });
    }

    // Dynamic example based on humanLanguage
    const getExample = (lang) => {
      const examples = {
        English: {
          code: 'print("Hello, World!")\\nx = 10 + 5\\nprint(x)',
          explanation:
            "This program demonstrates basic Python concepts. First, it prints the message 'Hello, World!' to the console, which is a tradition in programming to show the first functional program. Then it creates a variable called 'x' and assigns it the result of adding 10 and 5, which is 15. Finally, it prints the value of this variable. The program illustrates text output, basic arithmetic operations, variable assignment, and how to display the content of a variable.",
          liveFeedback:
            "The code is correct and works perfectly. Consider using more descriptive variable names like 'sum' instead of 'x'. For the future, you can use f-strings for better formatting: print(f'Result: {sum}').",
        },
        Spanish: {
          code: 'print("Hello, World!")\\nx = 10 + 5\\nprint(x)',
          explanation:
            "Este programa demuestra conceptos básicos de Python. Primero imprime el mensaje 'Hello, World!' en la consola, que es una tradición en programación para mostrar el primer programa funcional. Luego crea una variable llamada 'x' y le asigna el resultado de sumar 10 y 5, que es 15. Finalmente imprime el valor de esta variable. El programa ilustra la salida de texto, operaciones aritméticas básicas, asignación de variables y cómo mostrar el contenido de una variable.",
          liveFeedback:
            "El código está correcto y funciona perfectamente. Considera usar nombres de variables más descriptivos como 'suma' en lugar de 'x'. Para el futuro, puedes usar f-strings para mejor formato: print(f'Resultado: {suma}').",
        },
      };

      // Default to English if language not found
      return examples[lang] || examples.English;
    };

    const example = getExample(humanLanguage);

    const prompt = `Given the following ${language} code: ${codeSnippet}, provide a comprehensive analysis in ${humanLanguage}.

Create a JSON object with the following properties:
1. "code": The ORIGINAL and EXACT code from the input, without any modifications.
2. "explanation": A detailed explanation in ${humanLanguage} that covers:
   - What the overall program does and its purpose
   - How the main components/functions work together
   - Key programming concepts being used
   - The flow of execution
   - Any important details about the implementation

3. "liveFeedback": A brief and concise analysis in ${humanLanguage} (maximum 3-4 sentences) that includes:
   - Quick assessment if code is correct or has issues
   - One main suggestion for improvement
   - One practical tip for better coding

Keep the feedback short, direct, and actionable. Use simple language and focus on the most important points only.

Return ONLY the JSON object. Do not include any introductory or concluding remarks, or any other text.

Here is an example of the desired JSON format:

{
  "code": "${example.code}",
  "explanation": "${example.explanation}",
  "liveFeedback": "${example.liveFeedback}"
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
              type: Type.STRING,
            },
            explanation: {
              type: Type.STRING,
            },
            liveFeedback: {
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

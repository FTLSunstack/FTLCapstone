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

    const prompt = `Given the following ${language} code: ${codeSnippet}, provide a comprehensive analysis in Spanish.

Create a JSON object with the following properties:
1. "code": The ORIGINAL and EXACT code from the input, without any modifications.
2. "explanation": A detailed explanation in Spanish that covers:
   - What the overall program does and its purpose
   - How the main components/functions work together
   - Key programming concepts being used
   - The flow of execution
   - Any important details about the implementation

3. "liveFeedback": A brief and concise analysis in Spanish (maximum 3-4 sentences) that includes:
   - Quick assessment if code is correct or has issues
   - One main suggestion for improvement
   - One practical tip for better coding

Keep the feedback short, direct, and actionable. Use simple language and focus on the most important points only.

Return ONLY the JSON object. Do not include any introductory or concluding remarks, or any other text.

Here is an example of the desired JSON format:

{
  "code": "print(\\"Hello, World!\\")\\nx = 10 + 5\\nprint(x)",
  "explanation": "Este programa demuestra conceptos básicos de Python. Primero imprime el mensaje 'Hello, World!' en la consola, que es una tradición en programación para mostrar el primer programa funcional. Luego crea una variable llamada 'x' y le asigna el resultado de sumar 10 y 5, que es 15. Finalmente imprime el valor de esta variable. El programa ilustra la salida de texto, operaciones aritméticas básicas, asignación de variables y cómo mostrar el contenido de una variable.",
  "liveFeedback": "El código está correcto y funciona perfectamente. Considera usar nombres de variables más descriptivos como 'suma' en lugar de 'x'. Para el futuro, puedes usar f-strings para mejor formato: print(f'Resultado: {suma}')."
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

const refreshTermExample = async (req,res) => {
  try {
    const {term} = req.body
    if (!term) {
      console.error("Missing 'term' in request body");
      return res.status(400).json({
        success: false,
        error: "Missing term in request",
      });
    }
    const prompt = `Provide a beginner-level, short Python code snippet for the term ${term}. Include a comment within the code indicating its expected output. Return only the code snippet as a plain string, without any additional text or formatting outside the code block.The code must include a comment using '#' to explain the expected output. Use only # comments to explain the code. 
      Do NOT use Markdown formatting.
      Do NOT wrap the code in triple backticks.
      Do NOT use Python docstrings ("""...""").
      Return only the raw Python code as plain text.`
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    let example = response.text;

    // we need to clean it up because it always outputs with backticks for some reasons
    example = example.trim();
    const lines = example.split("\n");
    if (lines[0].startsWith("```")) {
      lines.shift();
    }
    if (lines[lines.length - 1] === "```") {
      lines.pop();
    }
    example = lines.join("\n").trim();


    res.json({
      success: true,
      example,
    });
  }
  catch(error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      error: "Failed to Refresh Example",
    });
  }
}

module.exports = { explainCode, refreshTermExample };

const { GoogleGenerativeAI } = require("@google/generative-ai");
const config = require("../config");

const genAI = new GoogleGenerativeAI(config.API_KEY);

async function generateSummary(userPrompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prefix =
    "Resuma o texto a seguir em de forma curta e objetiva, destacando o principal benefício ou mensagem: ";
  const prompt = `${prefix}${userPrompt}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
}

module.exports = { generateSummary };

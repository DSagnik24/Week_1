import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "YOUR_GEMINI_API_KEY"; // 🔑 Replace with your Gemini API Key
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function analyzeSoilAndRecommend(soilData) {
    const prompt = `
    You are an agriculture assistant.
    Soil data: pH=${soilData.ph}, Nitrogen=${soilData.nitrogen}, Phosphorus=${soilData.phosphorus}, Potassium=${soilData.potassium}, Rainfall=${soilData.rainfall}.
    Recommend the best crop and fertilizer with short reasoning in clear bullet points.
  `;
    const result = await model.generateContent(prompt);
    return result.response.text();
}

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyClfJDDILCR8VjZ8Kry1ttEEiyhUdAxztw";
const genAI = new GoogleGenerativeAI(API_KEY);

export const generateWordWithGemini = async (difficulty, language = 'tr') => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    let prompt = "";
    if (language === 'tr') {
      prompt = `Zorluk seviyesi '${difficulty}' olan bir tabu kelimesi ve 5 adet yasaklı kelime üret. Cevabını JSON formatında ver. Örnek: {"word": "Elma", "taboo": ["Meyve", "Ağaç", "Kırmızı", "Yemek", "Çekirdek"]}. Sadece JSON çıktısı ver, başka hiçbir metin ekleme.`;
    } else {
      prompt = `Generate a taboo word and 5 taboo words for the difficulty level '${difficulty}'. Provide the answer in JSON format. Example: {"word": "Apple", "taboo": ["Fruit", "Tree", "Red", "Eat", "Seed"]}. Provide only the JSON output, do not add any other text.`;
    }
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Remove markdown formatting if present
    const cleanText = text.replace(/```json\n|\n```/g, '').trim();
    return JSON.parse(cleanText);

  } catch (error) {
    console.error("Gemini API kelime üretme hatası:", error);
    return null;
  }
};

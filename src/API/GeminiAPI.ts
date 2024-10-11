import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const searchDestinations = async (destination: string, tripLength: string, season: string) => {
  const query = `top destinations in ${destination} for ${season} for ${tripLength} , including budget recommendations and highlights.`;

  try {
    const result = await model.generateContent(query);
    const textResponse = await result.response.text();

    const cleanedResponse = textResponse
      .replace(/\*\*/g, "") 
      .replace(/\*/g, ""); 

    const suggestions = cleanedResponse.split('\n\n').map((suggestion) => suggestion.trim()).filter(Boolean);

    const structuredSuggestions = suggestions.map(suggestion => {
      const lines = suggestion.split('\n');
      const country = lines[0]?.trim();
      const budgetLine = lines.find(line => line.toLowerCase().includes('budget:')); 
      const highlightsStartIndex = lines.findIndex(line => line.toLowerCase().includes('highlights:')); 
      const highlights = lines.slice(highlightsStartIndex + 1).map(line => line.trim()).filter(Boolean); 

      const budget = budgetLine ? budgetLine.replace('Budget:', '').trim() : ''; 

      return { country, budget, highlights };
    });

    return structuredSuggestions;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return [{ country: "Error", description: "Error fetching destination suggestions. Please try again." }];
  }
};

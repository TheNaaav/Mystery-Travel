import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";


export default function GetStart() {
  const [formData, setFormData] = useState({
    destination: '',
    tripLength: '',
    season: '',
  });
  const [pending, setPending] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const searchDestinations = async () => {
    const { destination, tripLength, season } = formData;
  
    const apiKey = "AIzaSyDilgL_MyEDcxAdbmBN5i4wZwGMpgsr6YE"
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    setPending(true);
    const query = `top destinations in ${destination} for ${season} for ${tripLength} days`;

    try{
      const result = await model.generateContent(query);
      const textResponse = result.response.text();
      const suggestions = textResponse.split('\n').map((suggestion) => suggestion.trim()); 
      setResults(suggestions);
    } catch (error) {
      console.error("Error fetching data from API:", error);
      setResults(["Error fetching destination suggestions. Please try again."]);
    } finally {
      setPending(false);
    }
    
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await searchDestinations();
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Start Your Journey</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Destination Input */}
        <div>
          <label htmlFor="destination" className="block font-semibold">Destination</label>
          <select
            name="destination"
            id="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black bg-white"
          >
            <option value="">Select a region</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="north-america">North America</option>
            <option value="south-america">South America</option>
            <option value="africa">Africa</option>
            <option value="australia">Australia</option>
          </select>
        </div>

        {/* Trip Length Input */}
        <div>
          <label htmlFor="tripLength" className="block font-semibold">Trip Length</label>
          <select
            name="tripLength"
            id="tripLength"
            value={formData.tripLength}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          >
            <option value="">Select a trip length</option>
            <option value="less than 2weeks">Less than 2 weeks</option>
            <option value="2weeks">2 weeks</option>
            <option value="more than 2weeks">More than 2 weeks</option>
          </select>
        </div>

        {/* Season Select */}
        <div>
          <label htmlFor="season" className="block font-semibold">Preferred Season</label>
          <select
            name="season"
            id="season"
            value={formData.season}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black bg-white"
          >
            <option value="">Select a season</option>
            <option value="winter" className="text-black">Winter</option>
            <option value="spring" className="text-black">Spring</option>
            <option value="summer" className="text-black">Summer</option>
            <option value="autumn" className="text-black">Autumn</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={pending}>
            {pending ? "Searching..." : "Search"}
          </button>
        </div>
      </form>

      {/* Display Search Results */}
      {results.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Search Results</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 text-left">Suggestion</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

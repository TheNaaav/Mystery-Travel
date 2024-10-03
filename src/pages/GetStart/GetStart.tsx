import React, { useState } from 'react';

export default function GetStart() {
  const [formData, setFormData] = useState({
    destination: '',
    budget: '',
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

  // Simulate a search function based on user preferences
  const searchDestinations = async (preferences: { destination: any; budget: any; tripLength: any; season: any; }) => {
    const { destination, budget, tripLength, season } = preferences;
    setPending(true);
  
    const query = `top destinations in ${destination} for ${season} travel with a budget of ${budget} for ${tripLength}`;
  
    const apiKey = "AIzaSyAist2OTD9rFblzf60v5eQ4togCfVrDN1Y";
    const searchEngineId = "e0c4990213598493f";
  
    try {
      // Call the Google Custom Search API
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${searchEngineId}`);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json(); // Parse the JSON response
  
      // Check if there are results
      if (!data.items || data.items.length === 0) {
        return ["No results found. Please try different preferences."];
      }
  
      // Filter results to ensure they are relevant to the selected destination
      const results = data.items
        .filter((item: { title: string; }) => item.title.toLowerCase().includes(destination.toLowerCase())) // Ensure the title includes the selected destination
        .map((item: { title: string; snippet: string; link: any; }) => {
          const country = item.title || "Unknown Destination"; // Using title to guess the country
          const budgetInfo = `Budget: ${budget}`; // Budget info
          const description = item.snippet || "No description available."; // Description from snippet
          const link = item.link; // Link to the full article
          return `${country} - ${budgetInfo} - ${description} - Read more: ${link}`;
        });
  
      return results;
    } catch (error) {
      console.error("Error fetching data from Google:", error);
      return ["Error fetching destination suggestions. Please try again."];
    } finally {
      setPending(false);
    }
  };
  
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    // Gather user preferences from form state
    const preferences = {
      destination: formData.destination,
      budget: formData.budget,
      tripLength: formData.tripLength,
      season: formData.season,
    };

    // Call the search function with the preferences
    const searchResults = await searchDestinations(preferences); 
    setResults(searchResults); 

    setPending(false); 
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

        {/* Budget Input */}
        <div>
          <label htmlFor="budget" className="block font-semibold">Budget</label>
          <input
            type="number"
            name="budget"
            id="budget"
            placeholder="What's your budget?"
            value={formData.budget}
            onChange={handleChange}
            className="w-full p-2 border rounded text-black"
          />
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
        <div className="mt-8 ">
          <h2 className="text-2xl font-bold mb-4">Search Results</h2>
          <ul className="space-y-2 text-lg text-black">
            {results.map((result, index) => (
              <li key={index} className="p-2 border rounded bg-gray-100">{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

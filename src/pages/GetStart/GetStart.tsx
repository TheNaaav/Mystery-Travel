import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @ts-expect-error
import { searchDestinations } from '../../API/GeminiAPI';

export default function GetStart() {

  const [formData, setFormData] = useState({
    destination: '',
    tripLength: '',
    season: '',
    budget: '',
  });
  const [pending, setPending] = useState(false);
  const [, setResults] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    try {
      const { destination, season, tripLength } = formData;

      await new Promise((resolve) => setTimeout(resolve, 5000));

      const response = await searchDestinations(destination, tripLength, season);
      if (response) {
        navigate('/results', {
          state: { results: response },
          replace: false,
        });
      }
    } catch {
      setResults(["Error fetching destination suggestions. Please try again."]);
    } finally {
      setPending(false);
    }
  };

  return (
    <div
      className="flex flex-col h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/adventure-bg.jpg')`, 
        backgroundAttachment: 'fixed',
        maxHeight: '85vh',
      }}
    >
      <div className="flex items-center justify-center flex-grow mt-20">
        <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h1 className="text-4xl font-bold mb-5 text-center">Start Your Journey</h1>

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
              <option value="winter">Winter</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="autumn">Autumn</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            {pending ? (
              <div className="relative w-full h-4 bg-gray-300 rounded overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-300"
                  style={{ width: "100%" }}
                ></div>
                <p className="text-center mt-2 font-semibold">Loading...</p>
              </div>
            ) : (
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                disabled={!formData.destination || !formData.tripLength || !formData.season}
              >
                Start My Journey with Mastery Travel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

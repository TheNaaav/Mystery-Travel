import { useLocation, useNavigate } from 'react-router-dom';

export default function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];

  const handleBackClick = () => {
    navigate('/getstart');
  };

  return (
    <div className="container mx-auto p-8 text-white">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-4xl font-bold">Results</h1>
        <button
          onClick={handleBackClick}
          className="bg-red-600 
                    hover:bg-red-700 
                    text-white 
                    font-semibold 
                    py-2 px-4 
                    rounded-lg 
                    transition-transform 
                    duration-300 ease-in-out 
                    transform hover:scale-105 active:scale-95"
        >
          Go Back to Get Started
        </button>
      </div>

      {results.length > 0 ? (
        <div className="space-y-4">
            {results
            .filter((result, index, self) => 
                index === self.findIndex(r => r.country === result.country && r.budget === result.budget))  // Filtrerar dubbletter
            .map(({ country, budget, highlights }, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
                {country && <h1 className="text-3xl font-bold mb-2 text-yellow-400">{country}</h1>}
                {budget && <p className="text-lg font-semibold text-yellow-300"></p>}
                {highlights.length > 0 && (
                <div className="ml-5 text-gray-300">
                    {highlights
                    .filter(highlight => highlight !== country)  // Filtrera bort landet från highlights
                    .map((highlight, idx) => (
                        <p key={idx} className="text-lg leading-snug">{highlight}</p>
                    ))}
                </div>
                )}
            </div>
            ))}
        </div>
            ) : (
            <p>No results found.</p>
            )}
    </div>
  );
}

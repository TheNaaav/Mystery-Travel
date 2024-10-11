export default function About() {
  return (
    <div
      className="flex flex-col h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/adventure-bg.jpg')`,
        backgroundAttachment: 'fixed',
        maxHeight: '85vh',
      }}
    >
      {/* About section content */}
      <div className="relative z-10 about-container px-6 py-8 md:py-16 max-w-3xl mx-auto flex-grow flex flex-col justify-center">
        {/* Added background color for better text visibility */}
        <div className="bg-black bg-opacity-70 p-8 rounded-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-white">
            About Mastery Travel
          </h1>
          <p className="text-lg md:text-xl mb-4 text-center leading-relaxed text-white">
            Welcome to Mastery Travel, where your next adventure is a mystery waiting to be uncovered.
            Our goal is to help travelers who are unsure where to go by offering exciting destination ideas,
            tailored to your preferences. Whether you’re looking for a warm escape, a winter wonderland, or a
            cultural adventure, we’ve got you covered.
          </p>
          <p className="text-lg md:text-xl text-center leading-relaxed text-white">
            With Mastery Travel, you can explore destinations based on budget, trip length, and the time of year,
            ensuring your trip fits perfectly with your needs. Let us surprise you with personalized suggestions
            for your next journey!
          </p>
        </div>
      </div>
    </div>
  );
}



export default function Home() {
  return (
    <>
     <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/images/ce-travel.jpg')` }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col items-center justify-center text-black">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Mystery Travel</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
    </>
  );
};


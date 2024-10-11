import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div
      className="flex flex-col h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/adventure-bg.jpg')`,
        backgroundAttachment: 'fixed',
        maxHeight: '85vh',
      }}
    >
      {/* Flex container that centers content vertically and horizontally */}
      <div className="flex items-center justify-center flex-grow text-center flex-col">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg text-black">
          <TypeAnimation
            sequence={[
              'Welcome to Mystery Travel', 
              3000, 
              '',
              500, 
              'Welcome to Mystery Travel', 
              3000, 
              '', 
              500, 
            ]}
            wrapper="span"
            cursor={true} 
            repeat={Infinity} 
          />
        </h2>
        <Link to="/getstart">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:translate-y-1 active:scale-95 active:translate-y-0.5">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

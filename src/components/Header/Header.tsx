import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 p-4 text-white relative z-20">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-3xl font-bold">Mystery Travel</a>
        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          &#9776; {/* Hamburger icon */}
        </button>
        <nav className={`md:flex md:items-center ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 w-full md:w-auto bg-gray-800 transition-transform duration-300 z-30`}>
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li><a href="/" className="block py-2 md:py-0 hover:underline">Home</a></li>
            <li><a href="/about" className="block py-2 md:py-0 hover:underline">About Me</a></li>
            <li><a href="/contact" className="block py-2 md:py-0 hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

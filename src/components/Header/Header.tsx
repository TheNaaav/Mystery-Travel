import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-800 p-4 text-white relative">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/home" className="text-3xl font-bold">Mystery Travel</Link>
        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          &#9776; {/* Hamburger icon */}
        </button>
        <nav className={`md:flex md:items-center ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 w-full md:w-auto text-center bg-gray-800 `}>
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li><Link to="/" className="block py-2 md:py-0 hover:underline">Home</Link></li>
            <li><Link to="/about" className="block py-2 md:py-0 hover:underline">About</Link></li>
            <li><Link to="/contact" className="block py-2 md:py-0 hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


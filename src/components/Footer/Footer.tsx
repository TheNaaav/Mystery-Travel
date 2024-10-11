import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-6 text-white">
      {/* Wrapper div to align all content in one row */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Left section - Copyright and Links */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 w-full md:w-auto justify-between">
          {/* Copyright */}
          <p className="mb-2 md:mb-0">
            © 2024{' '}
            <a href="/" className="hover:underline">
              Navi™
            </a>
          </p>

          {/* Links */}
          <div className="flex space-x-4 items-center">
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>

        {/* Right section - Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://www.instagram.com/naaav_s/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/TheNaaav/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.linkedin.com/in/naruebet-singsathon-7b8337158/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://github.com/TheNaaav" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

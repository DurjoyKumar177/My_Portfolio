import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '/my_logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-200/70 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="lg:hidden p-2 text-gray-700 hover:text-gray-900">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Logo and Name */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 text-xl font-medium text-gray-900 hover:text-blue-500 cursor-pointer"
          >
            <img src={logo} alt="Logo" className="h-10 rounded-full" />
            <span>Durjoy Kumar</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-300 rounded cursor-pointer"
              activeClass="text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-300 rounded cursor-pointer"
              activeClass="text-blue-500"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-300 rounded cursor-pointer"
              activeClass="text-blue-500"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-300 rounded cursor-pointer"
              activeClass="text-blue-500"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-300 rounded cursor-pointer"
              activeClass="text-blue-500"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Download CV Button */}
        <a
          href="/public/CV of Durjoy Kumar.pdf"
          download="CV of Durjoy Kumar.pdf"
          className="hidden lg:block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
        >
          Download CV
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-14 left-0 w-full bg-gray-100/80 backdrop-blur-md shadow-md cursor-pointer">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={toggleMenu} // Close menu on click
                className="block px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-200 rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-200 rounded"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-200 rounded"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-200 rounded"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-200 rounded"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="/public/CV of Durjoy Kumar.pdf"
                download="CV of Durjoy Kumar.pdf"
                className="block px-4 py-2 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition-colors"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import logo from '/logo.jpg'; // Adjust path as needed

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-200/70 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden relative">
            <label tabIndex={0} className="p-2 text-gray-700 hover:text-gray-900 cursor-pointer">
              <FiMenu size={24} />
            </label>
            <ul
              tabIndex={0}
              className="absolute left-0 mt-2 w-52 bg-gray-100/80 backdrop-blur-md shadow-lg rounded-lg p-2 space-y-1"
            >
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-200 rounded"
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
                  className="block px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-200 rounded"
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
                  className="block px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-200 rounded"
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
                  className="block px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-200 rounded"
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
                  className="block px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-200 rounded"
                  activeClass="text-blue-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="blog"
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-200 rounded"
                  activeClass="text-blue-500"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Logo and Name */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 text-xl font-medium text-gray-900 hover:text-blue-500"
          >
            <img src={logo} alt="Logo" className="h-10 rounded-full" />
            <span>Durjoy Kumar</span>
          </Link>
        </div>

        {/* Center Section (Desktop Menu) */}


        {/* Right Section */}
        <div className='flex items-center'>
        <ul className=" space-x-1 hidden lg:flex">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-300 rounded"
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
                className="px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-300 rounded"
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
                className="px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-300 rounded"
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
                className="px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-300 rounded"
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
                className="px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-300 rounded"
                activeClass="text-blue-500"
              >
                Contact
              </Link>
            </li>
            <li>
                <Link
                  to="blog"
                  smooth={true}
                  duration={500}
                  className="px-4 py-2 text-gray-700 hover:text-blue-500 hover:bg-gray-300 rounded"
                  activeClass="text-blue-500"
                >
                  Blog
                </Link>
              </li>
          </ul>
          <a
            href="#"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Download CV
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
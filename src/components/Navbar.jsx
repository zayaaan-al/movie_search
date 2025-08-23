import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-2xl font-bold">
            <Link to="/">🎬 MovieSearch</Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/" className="hover:text-blue-400 transition">
              Popular
            </Link>
            <Link to="/" className="hover:text-blue-400 transition">
              Top Rated
            </Link>
            <Link to="/" className="hover:text-blue-400 transition">
              About
            </Link>
          </div>

       
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/" className="block hover:text-blue-400 transition">
            Popular
          </Link>
          <Link to="/" className="block hover:text-blue-400 transition">
            Top Rated
          </Link>
          <Link to="/" className="block hover:text-blue-400 transition">
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

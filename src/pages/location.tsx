import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Location: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  return (
    <div className="relative bg-gradient-to-r from-teal-200 via-teal-100 to-teal-50 overflow-hidden py-12">
      {/* Hamburger Menu for Mobile */}
      <button
        className="text-gray-800 block sm:hidden focus:outline-none absolute top-6 right-6 z-30"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation Menu
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } sm:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left absolute top-12 right-6 sm:static bg-white sm:bg-transparent p-4 sm:p-0 z-20`}
      >
        <ul className="space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
          <li>
            <Link to="/" className="text-xl font-semibold text-gray-800 hover:text-gray-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="text-xl font-semibold text-gray-800 hover:text-gray-600">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="text-xl font-semibold text-gray-800 hover:text-gray-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="text-xl font-semibold text-gray-800 hover:text-gray-600">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/LocationPage" className="text-xl font-semibold text-gray-800 hover:text-gray-600">
              Location
            </Link>
          </li>
        </ul>
      </nav> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Navigation Buttons in Horizontal Layout */}
        <div className="text-center mb-8 hidden sm:block">
          <nav className="inline-flex space-x-6">
            <Link to="/" className="text-xl font-semibold text-gray-800 hover:text-gray-600">Home</Link>
            <Link to="/shop" className="text-xl font-semibold text-gray-800 hover:text-gray-600">Shop</Link>
            <Link to="/AboutUs" className="text-xl font-semibold text-gray-800 hover:text-gray-600">About</Link>
            <Link to="/contacts" className="text-xl font-semibold text-gray-800 hover:text-gray-600">Contact</Link>
            <Link to="/LocationPage" className="text-xl font-semibold text-gray-800 hover:text-gray-600">Location</Link>
          </nav>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-teal-900">
          Our Location
        </h1>

        {/* Description */}
        <div className="text-center mb-8">
          <p className="text-lg text-teal-800 max-w-3xl mx-auto">
            Visit us at Maasai Lodge, Mayor Road, Building Name:  Gaia's Domain. Our office is located in a prime area with easy access and great visibility.
          </p>
        </div>

        {/* Image of the Building */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block w-full max-w-lg h-64 overflow-hidden rounded-lg shadow-lg mb-8"
          >
            <img
              src="https://landlords.rentershub.co.ke/propertyimages/330367049_1245227673017020_2762000051783773838_n.jpg"
              alt="Building"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Image of the Map */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block w-full max-w-lg h-64 overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="https://www.google.com/maps/vt/data=KrVWrBg_qsLMVJBTlMvsdmhxzSjzh80gw1mjNiLta51fygTiD3BVJgMStYMxA_7X1_3kxZgas56Waz764RhX8XmhT2yOxYJ05phRTxM8lppSDLbJis6jTFl4KZJpZY4qW0LMRtOZ86mw-k0iE-yrYFsfbdb__gjZox7hfxb15VctPlb1zyA08FtMBXjbEyE66eu_4_jvEw9OXpgSACqeiGLhFuEydQo5Lf8_5wIaLQZLGhkiOgCLUoXYypVzgt3MPxaJpwz4B-cPmfRaH5I-pYGKXqt61UWL24s"
              alt="Map"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Location Info */}
        <div className="text-center">
          <p className="text-lg text-teal-800">
            Address: Maasai Lodge, Mayor Road, Building Name: Gemark
          </p>
          <p className="text-lg text-teal-800 mt-4">
            For more details or to schedule a visit, please contact us at :+254-706560028.
          </p>
        </div>

        {/* Back to Home Button */}
        {/* <div className="text-center mt-6">
          <Link to="/" className="px-6 py-3 bg-yellow-500 text-gray-800 font-semibold rounded-lg hover:bg-yellow-600 transition-colors text-lg shadow-md">
            Back to Home
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Location;

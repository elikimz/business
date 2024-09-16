import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  return (
    <div className="relative min-h-screen py-12 px-4">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        style={{
          backgroundImage:
            'url(https://plus.unsplash.com/premium_photo-1683141361371-8028cd2c0ac8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Hamburger Menu for Mobile */}
      <button
        className="text-gray-800 block sm:hidden focus:outline-none absolute top-6 right-6 z-20"
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

      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } sm:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left absolute top-12 right-6 sm:static`}
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
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-8">
        <motion.h1
          className="text-4xl font-bold mb-8 text-red-500 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>

        <motion.div
          className="bg-white bg-opacity-90 text-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Get in Touch</h2>
          <p className="mb-4 text-gray-700">
            Feel free to reach out to us for any inquiries or support. We are here to help you!
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-yellow-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 5h18M3 10h18M3 15h18M3 20h18" />
              </svg>
              <p className="text-lg text-gray-900">+254-706560028</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-yellow-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
              <p className="text-lg text-gray-900">christaron091@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

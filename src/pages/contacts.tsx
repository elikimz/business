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
            'url(https://i.postimg.cc/XJ7Gk71H/image.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Navigation Menu */}
      <header className="w-full fixed top-0 left-0 py-6 bg-[#273747] shadow-lg z-30">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="flex items-center">
            <img
              src="https://i.postimg.cc/28Y62p4h/ia.jpg"
              alt="Carpet Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 mr-2 sm:mr-3"
            />
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#e74c3c]">
              Gaia's Domain
            </div>
          </div>

          <button
            className="text-[#e74c3c] block sm:hidden focus:outline-none"
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

          <nav
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } sm:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 text-center sm:text-left`}
          >
            <ul className="space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8 flex flex-col sm:flex-row">
              <li>
                <Link to="/" className="text-[#e74c3c] hover:text-[#ecf0f1]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-[#e74c3c] hover:text-[#ecf0f1]">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" className="text-[#e74c3c] hover:text-[#ecf0f1]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-[#e74c3c] hover:text-[#ecf0f1]">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/LocationPage" className="text-[#e74c3c] hover:text-[#ecf0f1]">
                  Location
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-20">
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

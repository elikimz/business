import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
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

      {/* Navigation Buttons */}
      <div className="text-center mb-8">
        <nav className="inline-flex space-x-6">
          <Link to="/" className="text-xl font-semibold text-gray-800 hover:text-gray-600">Home</Link>
          <Link to="/shop" className="text-xl font-semibold text-gray-800 hover:text-gray-600">Shop</Link>
          <Link to="/AboutUs" className="text-xl font-semibold text-gray-800 hover:text-gray-600">About</Link>
          <Link to="/contacts" className="text-xl font-semibold text-gray-800 hover:text-gray-600">Contact</Link>
          <Link to="/LocationPage" className="text-xl font-semibold text-gray-800 hover:text-gray-600">Location</Link>
        </nav>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
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

        {/* Back to Home Button */}
        {/* <div className="mt-8">
          <Link
            to="/"
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Back to Home
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;

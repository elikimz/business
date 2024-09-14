import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 text-white">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 10, ease: "easeInOut", loop: Infinity }}
      >
        <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506748686214e9df14e8a50d6efc16f6b2a8efc1be7e9d50f2a0da0cdbd8e9d2a)' }}></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl font-bold mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>

        <motion.div
          className="bg-white text-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            Feel free to reach out to us for any inquiries or support. We are here to help you!
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 5h18M3 10h18M3 15h18M3 20h18" />
              </svg>
              <p className="text-lg">+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7h18M3 12h18M3 17h18" />
              </svg>
              <p className="text-lg">contact@business.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

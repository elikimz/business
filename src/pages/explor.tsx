// src/pages/Explore.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Explore: React.FC = () => {
  const carpets = [
    { id: 1, name: 'Luxury Carpet', image: 'https://example.com/carpet1.jpg' },
    { id: 2, name: 'Modern Mat', image: 'https://example.com/mat1.jpg' },
    // Add more carpet images
  ];

  return (
    <div className="relative bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Explore</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/about-us" className="hover:underline">About Us</a></li>
            <li><a href="/explore" className="hover:underline">Explore</a></li>
          </ul>
        </div>
      </nav>

      {/* Explore Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {carpets.map(carpet => (
            <motion.div
              key={carpet.id}
              className="bg-white p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <motion.img
                  src={carpet.image}
                  alt={carpet.name}
                  className="w-full h-40 object-cover rounded-lg"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{carpet.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;

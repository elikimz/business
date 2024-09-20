import { Link } from 'react-router-dom';
import { useState } from 'react';
import Testimonials from '../components/testimonial';
import Footer from '../components/footer';
import { motion } from 'framer-motion';

// Array of background images
const backgroundImages = [
  'https://imgs.search.brave.com/YIVPyBwU5S9dTsHkNiiyy5s4VYLx1jYKF6oCyJClSko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYXp6/bGluZ2RlY29yLmNv/LmtlL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzAyL0ZsdWZm/eS1jYXJwZXRzLmpw/Zw',
  'https://imgs.search.brave.com/s8aIwf6x5HXHm_eci8EuBevyZ4_h5qWhVe1U4Iez5vE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYXp6/bGluZ2RlY29yLmNv/LmtlL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzAyL0ZsdWZm/eS1jYXJwZXRzLTIt/MS0zMDB4MzAwLmpw/Zw',
  'https://imgs.search.brave.com/s8aIwf6x5HXHm_eci8EuBevyZ4_h5qWhVe1U4Iez5vE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYXp6/bGluZ2RlY29yLmNv/LmtlL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzAyL0ZsdWZm/eS1jYXJwZXRzLTIt/MS0zMDB4MzAwLmpw/Zw'
  
];

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full py-6 bg-[#273747] shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              
              alt="Carpet Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 mr-2 sm:mr-3"
            />
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#8f463e]">
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
                <Link
                  to="/LocationPage"
                  className="text-[#e74c3c] hover:text-[#ecf0f1]"
                >
                  Location
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Animated Background */}
      <section className="relative w-full h-[75vh] sm:h-[80vh] md:h-screen overflow-hidden">
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 flex"
          initial={{ x: '-100%' }}
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {backgroundImages.map((url, index) => (
            <motion.div
              key={index}
              className="w-full h-full flex-shrink-0"
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </motion.div>

        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 sm:p-6 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e74c3c] mb-4 text-center">
            Luxurious Carpets
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 text-center">
            Comfort and style for your home.
          </p>
          <Link
            to="/shop"
            className="px-4 py-2 sm:px-6 sm:py-3 bg-[#3498db] text-white font-semibold rounded-md shadow-md hover:bg-[#2980b9] transition-transform transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-[#ecf0f1]">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#2c3e50]">
            Discover Our Collection
          </h2>
          <p className="text-base sm:text-lg text-[#2c3e50] mb-6 sm:mb-8">
            Explore our exclusive range of carpets and mats designed to enhance
            your home’s beauty and comfort.
          </p>
          <Link
            to="/shop"
            className="px-6 py-2 sm:px-8 sm:py-3 bg-[#e74c3c] text-white font-bold rounded-md hover:bg-[#ac4135] transition-transform transform hover:scale-105"
          >
            Explore Now
          </Link>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;

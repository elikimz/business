import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Testimonials from '../components/testimonial';
import Footer from '../components/footer';
import { motion } from 'framer-motion';

// Array of background images
const backgroundImages = [
  'https://i.postimg.cc/XJ7Gk71H/image.webp',
  'https://i.postimg.cc/wTmb56mQ/Pre-Launch-Blog-Geometric.jpg',
  'https://i.postimg.cc/xjJS7Vmc/How-to-choose-a-patterned-carpet.jpg',
];

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically switch images every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

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
                <Link to="/LocationPage" className="text-[#e74c3c] hover:text-[#ecf0f1]">
                  Location
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Animated Background */}
      <section className="relative w-full h-[75vh] sm:h-[80vh] md:h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          key={currentImageIndex} // This ensures a new image component is rendered each time
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Fade effect duration
          style={{
            backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

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
            to="/Explore"
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

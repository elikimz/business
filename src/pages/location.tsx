import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Location: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  return (
    <div className="relative bg-[#ecf0f1] overflow-hidden py-12">
      {/* Navigation Menu */}
      <header className="w-full fixed top-0 left-0 py-6 bg-[#273747] shadow-lg z-30">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
          <div className="flex items-center">
            <img
              src="https://i.postimg.cc/9McRB3Bf/carpet-men-vector-49232037.webp"
              alt="Carpet Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 mr-2 sm:mr-3"
            />
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#e74c3c]">
              Gaia's Domain
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
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

      <div className="container mx-auto px-4 relative z-10 mt-20">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-[#d04839]">
          Our Location
        </h1>

        {/* Description */}
        <div className="text-center mb-8">
          <p className="text-lg text-[#2c3e50] max-w-3xl mx-auto">
            Visit us at Maasai Lodge, Mayor Road, Building Name: The Boma Apartments. Our office is located in a prime area with easy access and great visibility.
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
              src="https://i.postimg.cc/P53PfMFJ/boma.jpg"
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
          <p className="text-lg text-[#2c3e50]">
            Address: Maasai Lodge, Mayor Road, Building Name: Gemark
          </p>
          <p className="text-lg text-[#2c3e50] mt-4">
            For more details or to schedule a visit, please contact us at: +254-706560028.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;

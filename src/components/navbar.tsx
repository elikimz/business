import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 bg-[#2c3e50] shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
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
  );
};

export default Navbar;

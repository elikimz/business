import { Link } from 'react-router-dom';
import { useState } from 'react';

const Shop: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  const products = [
    { id: 1, name: 'Bathmats', image: 'https://i.postimg.cc/ZqNVzjTt/Bathmats.jpg' },
    { id: 2, name: 'Bedside Carpets', image: 'https://i.postimg.cc/1XmH6QDs/Bedside-carpets.jpg' },
    { id: 3, name: 'Circular Carpets', image: 'https://i.postimg.cc/MKrDcgHJ/Circular-carpets.jpg' },
    { id: 4, name: 'Fluffy Carpets', image: 'https://i.postimg.cc/Nj3kDTRN/Fluffy-carpets.jpg' },
    { id: 5, name: 'Large Carpets', image: 'https://i.postimg.cc/1tPchQCw/Large-carpets.jpg' },
    { id: 6, name: 'Medium-sized Carpets', image: 'https://i.postimg.cc/7L10NRH6/Medium-sized-carpets.jpg' },
    // Add more products if needed
  ];

  return (
    <div className="relative overflow-hidden bg-gray-100">
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

      <div className="container mx-auto py-12 px-4 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Products</h1>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg transition-transform duration-500 transform hover:scale-110"
                />
              </div>
              {/* Product Name */}
              <h2 className="text-lg font-semibold text-gray-800 text-center">{product.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

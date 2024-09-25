import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images for the slider
const images = [
  "https://media.istockphoto.com/id/1861392605/photo/colorful-carpet-samples-in-the-store.jpg?s=1024x1024&w=is&k=20&c=-HoNArpcMdWP-H8zbyILrMRb1PulaI-3GtvRRLRo4Vg=",
  "https://as2.ftcdn.net/v2/jpg/00/89/76/09/1000_F_89760942_RmpjUzGtDcERW1rlkNaifMr58NCVu7YB.jpg",
  "https://as2.ftcdn.net/v2/jpg/01/74/89/27/1000_F_174892730_gkRhoOJ1LYDIvdSaGBNptngLT3ZtMxds.jpg",
];

const AboutUs: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <>
      <header className="w-full py-6 bg-[#2c3e50] shadow-lg">
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

          {/* Menu Links */}
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

      {/* Main Content */}
      <div className="relative overflow-hidden py-12 bg-gradient-to-r from-blue-100 via-teal-100 to-blue-200">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center mb-6 text-teal-900">
            About Us
          </h1>
          <p className="text-lg text-teal-800 max-w-3xl mx-auto text-center mb-6">
            We are a company dedicated to providing the highest quality carpets and mats to enhance the beauty and comfort of your home or office. Our mission is to offer a wide variety of designs to match any aesthetic, along with excellent customer service.
          </p>
          <div className="square-card w-full max-w-2xl mb-8 relative">
            <Slider {...settings} className="w-full h-full">
              {images.map((src, index) => (
                <div key={index} className="w-full h-full relative">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

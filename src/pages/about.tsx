import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Updated images
const images = [
  "https://media.istockphoto.com/id/1861392605/photo/colorful-carpet-samples-in-the-store.jpg?s=1024x1024&w=is&k=20&c=-HoNArpcMdWP-H8zbyILrMRb1PulaI-3GtvRRLRo4Vg=",
  "https://as2.ftcdn.net/v2/jpg/00/89/76/09/1000_F_89760942_RmpjUzGtDcERW1rlkNaifMr58NCVu7YB.jpg",
  "https://as2.ftcdn.net/v2/jpg/01/74/89/27/1000_F_174892730_gkRhoOJ1LYDIvdSaGBNptngLT3ZtMxds.jpg",
  "https://as1.ftcdn.net/v2/jpg/00/88/08/98/1000_F_88089883_S91GWzftlYcsF7vZkRGxn6q5nMAAPNqi.jpg",
  "https://as2.ftcdn.net/v2/jpg/00/99/18/99/1000_F_99189995_jdHsK3q97xHX8zxJMRbmRQUGZieorTFR.jpg"
];

const AboutUs: React.FC = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Show navigation arrows
  };

  return (
    <div className="relative overflow-hidden py-12 bg-gradient-to-r from-blue-100 via-teal-100 to-blue-200">
      {/* Background Color */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 via-teal-100 to-blue-200 opacity-70" />

      <div className="container mx-auto py-12 px-4 relative z-10 flex flex-col items-center border-4 border-teal-900 rounded-lg shadow-lg bg-white bg-opacity-70 backdrop-blur-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-teal-900">
          About Us
        </h1>
        <p className="text-lg text-teal-800 max-w-3xl mx-auto text-center mb-8">
          We are a company dedicated to providing the highest quality carpets and mats to enhance the beauty and comfort of your home or office. Our mission is to offer a wide variety of designs to match any aesthetic, along with excellent customer service.
        </p>
        <div className="w-full max-w-3xl h-80 mb-8">
          <Slider {...settings} className="w-full h-full">
            {images.map((src, index) => (
              <div key={index} className="w-full h-full relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Back to Home Button */}
        <Link
            to="/"
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
   
  );
};

export default AboutUs;

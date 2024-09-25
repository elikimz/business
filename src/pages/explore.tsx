import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images for the slider
const sliderImages = [
  "https://media.istockphoto.com/id/1861392605/photo/colorful-carpet-samples-in-the-store.jpg?s=1024x1024&w=is&k=20&c=-HoNArpcMdWP-H8zbyILrMRb1PulaI-3GtvRRLRo4Vg=",
  "https://as2.ftcdn.net/v2/jpg/00/89/76/09/1000_F_89760942_RmpjUzGtDcERW1rlkNaifMr58NCVu7YB.jpg",
  "https://as2.ftcdn.net/v2/jpg/01/74/89/27/1000_F_174892730_gkRhoOJ1LYDIvdSaGBNptngLT3ZtMxds.jpg",
];

// Featured product images and details
const featuredProducts = [
  { 
    image: "https://i.postimg.cc/XJ7Gk71H/image.webp?text=Carpet+1", 
    name: "Luxurious Persian Carpet", 
    description: "Elegant design with intricate patterns.", 
    moreDetails: "This Persian carpet is crafted with high-quality wool, featuring a stunning array of colors and intricate motifs that add a touch of sophistication to any room. Perfect for living rooms or dining areas."
  },
  { 
    image: "https://i.postimg.cc/ZqNVzjTt/Bathmats.jpg?text=Carpet+2", 
    name: "Soft Bath Mat", 
    description: "Ultra-soft and absorbent.", 
    moreDetails: "Our bath mat provides a plush feel underfoot, designed to quickly absorb moisture and dry fast. Ideal for bathrooms and kitchens, it combines functionality with a stylish look."
  },
  { 
    image: "https://i.postimg.cc/1XmH6QDs/Bedside-carpets.jpg?text=Carpet+3", 
    name: "Cozy Bedside Runner", 
    description: "Perfect for any bedroom setting.", 
    moreDetails: "This bedside runner adds warmth to your bedroom, offering comfort and style. Made from soft materials, it complements your decor while providing a cushioned surface for your feet."
  },
  { 
    image: "https://i.postimg.cc/MKrDcgHJ/Circular-carpets.jpg?text=Carpet+4", 
    name: "Round Jute Carpet", 
    description: "Eco-friendly and stylish.", 
    moreDetails: "Crafted from natural jute fibers, this round carpet brings a rustic charm to your space. It's durable, easy to maintain, and adds a touch of nature to any room."
  },
  { 
    image: "https://i.postimg.cc/Nj3kDTRN/Fluffy-carpets.jpg?text=Carpet+5", 
    name: "Fluffy Shag Carpet", 
    description: "Luxuriously soft and plush.", 
    moreDetails: "Experience the ultimate in comfort with our fluffy shag carpet. Its long fibers provide a cozy atmosphere, perfect for lounging and relaxation in your living room or bedroom."
  },
  { 
    image: "https://i.postimg.cc/1tPchQCw/Large-carpets.jpg?text=Carpet+6", 
    name: "Spacious Area Rug", 
    description: "Ideal for larger spaces.", 
    moreDetails: "This spacious area rug is designed to anchor your room beautifully. With a blend of stylish patterns and colors, it complements your furniture while adding warmth and character."
  },
];

const testimonials = [
  {
    quote: "The carpet I bought completely transformed my living room! It's so soft and looks amazing.",
    name: "Emily R.",
  },
  {
    quote: "I was looking for something unique, and the Persian carpet exceeded my expectations. Highly recommend!",
    name: "Michael T.",
  },
  {
    quote: "Great service and beautiful carpets. I couldn't be happier with my purchase.",
    name: "Sarah K.",
  },
];

const Explore: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const toggleDetails = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <header className="w-full py-6 bg-[#273747] shadow-lg">
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

          <button
            className="text-[#e74c3c] block sm:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <nav className={`${isMenuOpen ? 'block' : 'hidden'} sm:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 text-center sm:text-left`}>
            <ul className="space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8 flex flex-col sm:flex-row">
              <li><Link to="/" className="text-[#e74c3c] hover:text-[#ecf0f1]">Home</Link></li>
              <li><Link to="/shop" className="text-[#e74c3c] hover:text-[#ecf0f1]">Shop</Link></li>
              <li><Link to="/explore" className="text-[#e74c3c] hover:text-[#ecf0f1]">Explore</Link></li>
              <li><Link to="/AboutUs" className="text-[#e74c3c] hover:text-[#ecf0f1]">About</Link></li>
              <li><Link to="/contacts" className="text-[#e74c3c] hover:text-[#ecf0f1]">Contact</Link></li>
              <li><Link to="/LocationPage" className="text-[#e74c3c] hover:text-[#ecf0f1]">Location</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Slider Section */}
      <div className="py-12 bg-gradient-to-r from-blue-100 via-teal-100 to-blue-200">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-teal-900">Explore Our Luxurious Carpets</h1>
          <Slider {...sliderSettings} className="w-full">
            {sliderImages.map((src, index) => (
              <div key={index} className="w-full h-80 relative overflow-hidden rounded-lg shadow-lg">
                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Map through featured products with unique images */}
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-32 object-cover rounded-t-lg" 
                />
                <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                {activeIndex === index && (
                  <p className="mt-2 text-[#3498db]">{product.moreDetails}</p> // Changed to blue
                )}
                <button 
                  onClick={() => toggleDetails(index)} 
                  className="mt-4 inline-block bg-[#e74c3c] text-white rounded-md px-4 py-2 hover:bg-[#ac4135]"
                >
                  {activeIndex === index ? 'Hide Details' : 'More Details'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-[#ecf0f1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">What Our Customers Say</h2>
          <div className="flex flex-col md:flex-row justify-center items-center">
            {/* Map through testimonials */}
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4 m-2">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <p className="font-bold mt-2">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-[#273747]">
        <div className="container mx-auto text-center text-white">
          <p>&copy; {new Date().getFullYear()} Gaia's Domain. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Explore;

// src/pages/AboutUs.tsx
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
        We are a company dedicated to providing the highest quality carpets and mats to enhance the beauty and comfort of your home or office. Our mission is to offer a wide variety of designs to match any aesthetic, along with excellent customer service.
      </p>
      <div className="text-center mt-6">
        <img src="https://imgs.search.brave.com/OWTSnyJdeETJTVnM-Y5OMLhVgk8sDAG_Z9DTojeg8ms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxcWI1YjE0WXhM/LmpwZw" alt="Our Company" className="w-full h-64 object-cover" />
      </div>
    </div>
  );
};

export default AboutUs;

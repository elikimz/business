//import React from 'react';

const testimonials = [
  {
    name: 'Alice Johnson',
    message: 'The carpets are of high quality and transformed my living room!',
    photo: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Michael Lee',
    message: 'Excellent customer service and fast delivery. Highly recommend!',
    photo: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    name: 'Sarah Wilson',
    message: 'Beautiful mats with great durability. I will definitely buy again.',
    photo: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

const Testimonials = () => {
  return (
    <div className="bg-[#ecf0f1] p-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#3498db]">What Our Customers Say</h2>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg w-64">
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-lg font-semibold text-center text-[#3498db]">{testimonial.name}</p>
            <p className="text-[#2c3e50] text-center mt-2">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

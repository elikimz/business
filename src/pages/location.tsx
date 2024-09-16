import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Location: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-teal-200 via-teal-100 to-teal-50 overflow-hidden py-12">
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-teal-900">
          Our Location
        </h1>
        <div className="text-center mb-8">
          <p className="text-lg text-teal-800 max-w-3xl mx-auto">
            Visit us at Maasai Lodge, Mayor Road, Building Name: Gemark. Our office is located in a prime area with easy access and great visibility.
          </p>
        </div>

        {/* Image of the building */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block w-full max-w-lg h-64 overflow-hidden rounded-lg shadow-lg mb-8"
          >
            <img
              src="https://landlords.rentershub.co.ke/propertyimages/330367049_1245227673017020_2762000051783773838_n.jpg"
              alt="Building"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Image of the map */}
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

        <div className="text-center">
          <p className="text-lg text-teal-800">
            Address: Maasai Lodge, Mayor Road, Building Name: Gemark
          </p>
          <p className="text-lg text-teal-800 mt-4">
            For more details or to schedule a visit, please contact us at [your contact information].
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-6">
          <Link to="/" className="px-6 py-3 bg-yellow-500 text-gray-800 font-semibold rounded-lg hover:bg-yellow-600 transition-colors text-lg shadow-md">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Location;

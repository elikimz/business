import React from 'react';
import { Link } from 'react-router-dom';

const Shop: React.FC = () => {
  const products = [
    { id: 1, image: 'https://imgs.search.brave.com/s8aIwf6x5HXHm_eci8EuBevyZ4_h5qWhVe1U4Iez5vE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kYXp6/bGluZ2RlY29yLmNv/LmtlL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzAyL0ZsdWZm/eS1jYXJwZXRzLTIt/MS0zMDB4MzAwLmpw/Zw' },
    { id: 2, image: 'https://imgs.search.brave.com/uFA00s4agw0vLosGCP29VdcETABSiaFCEXO1TyH2isg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly96aW1j/b21wYXNzLmFwLXNv/dXRoLTEubGlub2Rl/b2JqZWN0cy5jb20v/emltY29tcGFzcy1w/cm9kdWN0XzAxZDg2/Mzg0ODMyMjc0ODIw/OTE3ODAuanBn' },
    { id: 3, image: 'https://imgs.search.brave.com/eO8Jo46_PQi_Qf_xvquX_WpOgzkb27DAaFoVkws6gx4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/NjQ3NjQ3L3Bob3Rv/L2NhcnBldHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUM2/SXRWcE01ZGJKdzlC/THA3MVExXzRqMFBR/NzVuaUJ3M1RGQ3dX/TzR6RGs9' },
    { id: 4, image: 'https://target.scene7.com/is/image/Target/GUEST_80def083-9647-4bbb-afa2-5e8690eb543f?wid=1200&hei=1200&qlt=80&fmt=webp' },
    { id: 5, image: 'https://target.scene7.com/is/image/Target/GUEST_0f2b981d-480d-418d-a4c2-5ffa1f469acf?wid=1200&hei=1200&qlt=80&fmt=webp' },
    { id: 6, image: 'https://target.scene7.com/is/image/Target/GUEST_7a78cd0d-07fa-4eee-a2fa-45ef8d5a61db?wid=1200&hei=1200&qlt=80&fmt=webp' },
    // Add more products if needed
  ];

  return (
    <div className="relative overflow-hidden bg-gray-100"> {/* Solid background color */}
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
                  alt={`Product ${product.id}`}
                  className="w-full h-40 object-cover rounded-lg transition-transform duration-500 transform hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;

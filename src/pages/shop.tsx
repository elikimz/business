import React from 'react';

const Shop: React.FC = () => {
  const products = [
    { id: 1, name: 'Luxury Carpet', price: '$200', image: 'https://imgs.search.brave.com/eO8Jo46_PQi_Qf_xvquX_WpOgzkb27DAaFoVkws6gx4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/NjQ3NjQ3L3Bob3Rv/L2NhcnBldHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUM2/SXRWcE01ZGJKdzlC/THA3MVExXzRqMFBR/NzVuaUJ3M1RGQ3dX/TzR6RGs9' },
    { id: 2, name: 'Modern Mat', price: '$50', image: 'https://imgs.search.brave.com/eO8Jo46_PQi_Qf_xvquX_WpOgzkb27DAaFoVkws6gx4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/NjQ3NjQ3L3Bob3Rv/L2NhcnBldHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUM2/SXRWcE01ZGJKdzlC/THA3MVExXzRqMFBR/NzVuaUJ3M1RGQ3dX/TzR6RGs9' },
    { id: 3, name: 'Luxury Carpet', price: '$200', image: 'https://imgs.search.brave.com/eO8Jo46_PQi_Qf_xvquX_WpOgzkb27DAaFoVkws6gx4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/NjQ3NjQ3L3Bob3Rv/L2NhcnBldHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUM2/SXRWcE01ZGJKdzlC/THA3MVExXzRqMFBR/NzVuaUJ3M1RGQ3dX/TzR6RGs9' },
    { id: 4, name: 'Luxury Carpet', price: '$200', image: 'https://target.scene7.com/is/image/Target/GUEST_80def083-9647-4bbb-afa2-5e8690eb543f?wid=1200&hei=1200&qlt=80&fmt=webp' },
    { id: 5, name: 'Luxury Carpet', price: '$200', image: 'https://target.scene7.com/is/image/Target/GUEST_0f2b981d-480d-418d-a4c2-5ffa1f469acf?wid=1200&hei=1200&qlt=80&fmt=webp' },
    { id: 6, name: 'Luxury Carpet', price: '$200', image: 'https://target.scene7.com/is/image/Target/GUEST_7a78cd0d-07fa-4eee-a2fa-45ef8d5a61db?wid=1200&hei=1200&qlt=80&fmt=webp' },
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
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg transition-transform duration-500 transform hover:scale-110"
                />
              </div>
              {/* Product Name */}
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
              {/* Product Price */}
              <p className="text-lg text-gray-600 font-medium">{product.price}</p>
              {/* Add to Cart Button */}
              <button className="mt-4 px-3 py-1 bg-yellow-500 text-gray-800 font-semibold rounded-md hover:bg-yellow-600 transition-colors text-sm">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

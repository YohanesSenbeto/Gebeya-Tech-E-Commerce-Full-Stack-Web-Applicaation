// ProductSearchResults.tsx

import React from 'react';
import { useSearch } from './SearchContext';





const ProductSearchResults: React.FC<ProductSearchResultsProps> = () => {
    
  const { products } = useSearch();

  console.log(products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
        <div key={products.product_id} className="bg-white p-6 rounded-lg shadow-md">
          <img src={products.image_url} alt={products.product_name} className="h-40 w-full object-contain mb-4" />
          <h3 className="text-xl font-semibold mb-2">{product.product_id}</h3>
          <p className="text-gray-600 mb-4">{products.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">${products.price}</span>
            <button
              
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md transition duration-300"
            >
              Add to Cart
              hello
            </button>
            hello
          </div>
        </div>
      
    </div>
  );
};

export default ProductSearchResults;

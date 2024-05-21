import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
}

const products: Product[] = [
  {
    image: "https://images.wallpapersden.com/image/wxl-iphone-6-apple-smartphone_22945.jpg",
    name: "Apple iPhone 14 Pro",
    description: "The latest flagship smartphone from Apple.",
    price: 999,
    rating: 4.5,
  },
  {
    image: "https://images.wallpapersden.com/image/wxl-iphone-6-apple-smartphone_22945.jpg",
    name: "Samsung Galaxy S21 Ultra",
    description: "High-end smartphone with advanced features.",
    price: 1199,
    rating: 4.7,
  },


  {
    image: "https://images.wallpapersden.com/image/wxl-iphone-6-apple-smartphone_22945.jpg",
    name: "Apple iPhone 14 Pro",
    description: "The latest flagship smartphone from Apple.",
    price: 999,
    rating: 4.5,
  },
  {
    image: "https://images.wallpapersden.com/image/wxl-iphone-6-apple-smartphone_22945.jpg",
    name: "Samsung Galaxy S21 Ultra",
    description: "High-end smartphone with advanced features.",
    price: 1199,
    rating: 4.7,
  },

  {
    image: "https://images.wallpapersden.com/image/wxl-iphone-6-apple-smartphone_22945.jpg",
    name: "Apple iPhone 14 Pro",
    description: "The latest flagship smartphone from Apple.",
    price: 999,
    rating: 4.5,
  },
  {
    image: "https://images.wallpapersden.com/image/wxl-iphone-6-apple-smartphone_22945.jpg",
    name: "Samsung Galaxy S21 Ultra",
    description: "High-end smartphone with advanced features.",
    price: 1199,
    rating: 4.7,
  },
  {
    image: "https://images.wallpapersden.com/image/wxl-iphone-6-apple-smartphone_22945.jpg",
    name: "Apple iPhone 14 Pro",
    description: "The latest flagship smartphone from Apple.",
    price: 999,
    rating: 4.5,
  },
  {
    image: "https://images.wallpapersden.com/image/wxl-iphone-6-apple-smartphone_22945.jpg",
    name: "Samsung Galaxy S21 Ultra",
    description: "High-end smartphone with advanced features.",
    price: 1199,
    rating: 4.7,
  },
  // Add more products with similar structure
  // Ensure there are 20 products with varying ratings
].sort((a, b) => b.rating - a.rating);

/**
 * ProductList component displays a list of product cards.
 * @returns JSX element representing a list of product cards.
 */
const ProductList: React.FC = () => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
  </div>
);

export default ProductList;

import React, { useState, useEffect } from'react';
import { useLocation } from'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addToCart } from "./gebeyacart/features/cart/cartSlice"
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  product_id: number;
  product_name: string;
  description: string;
  category_id: number;
  image_url: string;
  price: number;
  stock: number;
  status: string;
  tags: string;
}

const ProductSearchResults: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');
  const category = queryParams.get('category');

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/api/search`, {
          params: {
            query,
            category,
          },
        });
        const products = response.data;
        setProducts(products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, category]);


  const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
        toast.success(`product added to cart!`);
    };

  return (
    <div>
      {loading? (
        <div>Loading...</div>
      ) : (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:p-6"
        >
          {products.map((product) => (
            <div
              key={product.product_id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-950"
            >
              <img
                src={product.image_url}
                alt={product.product_name}
                className="w-full h-60 object-cover"
                height="300"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width="400"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-bold">{product.product_name}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {product.description}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{product.price}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="bg-[#1e40af] text-white hover:bg-[#1e40af]/90 focus-visible:ring-[#1e40af]"
                      variant="outline"
                    >
                      Add to Cart
                    </Button>
                    <Button
                      onClick={() => alert("Product Detail")}
                      className="bg-[#1e40af] text-white hover:bg-[#1e40af]/90 focus-visible:ring-[#1e40af]"
                      variant="outline"
                    >
                      Product Detail
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default ProductSearchResults;
// SearchResultsPage.tsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string;
}

const ProductSearchResults: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");
    const category = queryParams.get("category");

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await axios.get<Product[]>(`/api/search?query=${query}&category=${category}`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [query, category]);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold my-4">Search Results for "{query}" in {category}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <img
                            alt="Product Image"
                            className="w-full h-48 object-cover"
                            src={product.image}
                            style={{
                                aspectRatio: "400/300",
                                objectFit: "cover",
                            }}
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 mb-2">
                                ${product.price.toFixed(2)}
                            </p>
                            <p className="text-gray-600 mb-4">
                                {product.description}
                            </p>
                            <Button className="w-full">Add to Cart</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductSearchResults;

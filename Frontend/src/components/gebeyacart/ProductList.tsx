import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./features/cart/cartSlice";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import "react-toastify/dist/ReactToastify.css";

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
}

export const products: Product[] = [
    
];

const ProductList: React.FC = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product));
        toast.success(`product added to cart!`);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:p-6">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-950"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-60 object-cover"
                        height="300"
                        style={{
                            aspectRatio: "400/300",
                            objectFit: "cover",
                        }}
                        width="400"
                    />
                    <div className="p-4 space-y-2">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {product.description}
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold">
                                    {product.price}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-[#1e40af] text-white hover:bg-[#1e40af]/90 focus-visible:ring-[#1e40af]"
                                    variant="outline"
                                >
                                    <ShoppingCartIcon className="w-5 h-5 mr-2" />
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
    );
};

export default ProductList;

function ShoppingCartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    );
}

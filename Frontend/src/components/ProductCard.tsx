//ProductCard.tsx
import React from "react";
import "./ProductCard.css";

interface Product {
    image: string;
    name: string;
    description: string;
    price: number;
    rating: number; // average rating (e.g. 4.2)
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { image, name, description, price, rating } = product;
    const ratingStars = Math.floor(rating); // round down to nearest whole number
    const ratingFraction = rating - ratingStars; // get the fractional part of the rating

    return (
        <div className="group grid gap-4 rounded-lg border border-[#0B1D38] bg-[#0B1D38] p-4 shadow-lg transition-all hover:bg-[#0B1D38]/90">
            <img
                alt="Product Image"
                className="aspect-square overflow-hidden rounded-lg object-cover"
                height="500"
                src={image}
                width="300"
            />
            <div className="flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-medium text-white">{name}</h3>
                    <p className="text-gray-300">{description}</p>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">
                        ${price}
                    </span>
                    <span className="star-rating">
                        {Array.from({ length: 5 }, (_, index) => {
                            if (index < ratingStars) {
                                return <span key={index} className="filled" />;
                            } else if (
                                index === ratingStars &&
                                ratingFraction > 0
                            ) {
                                return <span key={index} className="half" />;
                            } else {
                                return <span key={index} className="empty" />;
                            }
                        })}
                    </span>
                </div>
                <button className="mt-2 text-blue-500 hover:underline">
                    Rate this product
                </button>
            </div>
        </div>
    );
};

export default ProductCard;

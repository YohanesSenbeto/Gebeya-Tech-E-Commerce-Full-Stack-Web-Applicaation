import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

interface CartItem {
    product_id: string;
    product_name: string;
    price: number;
    quantity: number;
    image_url: string;
}

interface CartDropdownProps {
    items: CartItem[];
}

const CartDropdown: React.FC<CartDropdownProps> = ({ items }) => {
    const navigate = useNavigate();
    const totalPrice = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="mt-2 w-100 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
                {items.length === 0 ? (
                    <p className="text-gray-600">Your cart is empty</p>
                ) : (
                    <div className="max-h-64 overflow-y-auto">
                        {items.map((item) => (
                            <div
                                key={item.product_id}
                                className="flex items-center mb-4"
                            >
                                <img
                                    src={item.image_url}
                                    alt={item.product_name}
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <div className="ml-4">
                                    <p className="font-semibold">{item.product_name}</p>
                                    <p className="text-gray-600">
                                        Price: ${item.price}
                                    </p>
                                    <p className="text-gray-600">
                                        Quantity: {item.quantity}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="border-t mt-4 pt-4">
                    <p className="font-semibold text-lg">
                    Total: ${totalPrice.toFixed(2)}
                    </p>
                   
                </div>
            </div>
        </div>
    );
};

export default CartDropdown;

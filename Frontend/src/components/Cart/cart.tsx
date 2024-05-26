//cart.tsx
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import CartItem from "./CartItem/CartItem";

interface CartProps {
    cart: Array<{
        id: number;
        qty: number;
        price: number;
    }>;
}

const Cart: React.FC<CartProps> = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [totalItems, setTotalItems] = useState<number>(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart]);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:space-x-6">
                <div className="md:w-3/4">
                    <div className="bg-white rounded shadow-md">
                        <div className="p-4">
                            {cart.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="md:w-1/4">
                    <div className="bg-white rounded shadow-md p-4">
                        <h4 className="text-lg font-semibold mb-4">
                            Cart Summary
                        </h4>
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-600">
                                TOTAL: ({totalItems} items)
                            </span>
                            <span className="text-gray-800 font-bold">
                                ${totalPrice}
                            </span>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Proceed To Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Cart);

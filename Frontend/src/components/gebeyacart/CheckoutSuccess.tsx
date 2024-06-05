import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./features/cart/cartSlice";
import { RootState } from "./App/store";

const CheckoutSuccess: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    useEffect(() => {
        dispatch(clearCart());
    }, [dispatch]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full text-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500 mx-auto mb-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                    />
                </svg>
                <h2 className="text-2xl font-semibold text-green-600 mb-2">
                    Checkout Successful!
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                    Your order is done
                </p>
                <p className="text-gray-600 mb-2">
                    Your order might take some time to process.
                </p>
               
                <p className="text-gray-600">
                    In case of any inquiries, contact support at{" "}
                    <strong>support@gebeyatech.com</strong>
                </p>
            </div>
        </div>
    );
};

export default CheckoutSuccess;

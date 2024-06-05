import React from "react";
import { useSelector } from "react-redux";
import { loadStripe } from '@stripe/stripe-js';
import { RootState } from "./App/store";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import PayButton from './PayButton';
//import stripePromise from "./stripe";



const stripePromise = loadStripe('pk_test_51OVLc2HjxnpOvxRWl5YIZ6YlWUdabpFjF1hHlMRS0aNUBrY4LdCjd4jTKgvToLjzeuKhKHePgJosQokqtXu9RL8V002dPdJwiw');

const Checkout: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <ul className="space-y-4">
                        {cartItems.map((item) => (
                            <li
                                key={item.product_id}
                                className="flex justify-between items-center p-2 border rounded"
                            >
                                <div>
                                    <p className="font-semibold">{item.product_name}</p>
                                    <p className="text-sm text-gray-600">
                                        Quantity: {item.quantity}
                                    </p>
                                </div>
                                <p>${item.price * item.quantity}</p>
                            </li>
                        ))}
                        </ul>
                         <PayButton cartItems={cartItems} />
                    <div className="mt-4">
                        <p className="text-xl font-bold">
                            Total: ${totalPrice}
                        </p>
                    </div>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    <PayButton cartItems={cartItems} />
                        </Elements>
                        
                    </div>
                  
                    
                    

            )}
        </div>
    );
};

export default Checkout;

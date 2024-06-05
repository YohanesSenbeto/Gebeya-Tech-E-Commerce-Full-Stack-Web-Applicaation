import React, { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./App/store";
import { clearCart } from "./features/cart/cartSlice";
import { toast } from "react-toastify";
import axios from "axios";
import 'tailwindcss/tailwind.css';


const CheckoutForm: React.FC = () => {
    const stripe = useStripe();
    const elements = useElements();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        const createPaymentIntent = async () => {
            try {
                const response = await axios.post(`http://localhost:8000/api/stripe/create-checkout-session`,
                    {
                        cartItems
                    }
                );
                setClientSecret(response.data.clientSecret);
            } catch (error) {
                toast.error("Failed to initialize payment");
            }
        };

        createPaymentIntent();
    }, [cartItems]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements || !clientSecret) {
            return;
        }

        setLoading(true);

        try {
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)!,
                },
            });

            if (result.error) {
                toast.error(result.error.message || "An error occurred");
            } else if (result.paymentIntent?.status === "succeeded") {
                toast.success("Payment successful!");
                dispatch(clearCart());
            }
        } catch (error) {
            toast.error("An error occurred while processing the payment");
        }

        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
                <form onSubmit={handleSubmit} className="space-y-4 p-5]">
                    <CardElement className="p-3 border rounded-lg max-w " />
                    <button
                        type="submit"
                        disabled={!stripe || loading}
                        className="w-full bg-blue-500 text-white py-2 rounded-lg"
                    >
                        {loading ? "Processing..." : "Pay"}
                    </button>
                </form>
                


            </div>
            
        </div>
    );
};

export default CheckoutForm;

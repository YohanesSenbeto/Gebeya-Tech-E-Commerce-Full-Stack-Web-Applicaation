import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

interface User{

          active_user:string
          created_at:string
          email:string
          full_name:string
          gender:string
          password:string
          phone:string
          role_name:string
          user_id:string
          user_role_id:string
          username:string

}
interface CartItem {
    product_id: string;
    quantity: number;
    [key: string]: any;
}

interface PayButtonProps {
    cartItems: CartItem[];
}

const PayButton: React.FC<PayButtonProps> = ({ cartItems }) => {
 

  

    const handleCheckout = () => {

       

  
        axios.post(`http://localhost:8000/api/stripe/create-checkout-session`, {
                cartItems,
                
            }).then((response: { data: { url: string } }) => {
                if (response.data.url) {
                    window.location.href = response.data.url;
                }
            }).catch((err: { message: string }) => console.log(err.message));
    };

    return (
        <button
            onClick={handleCheckout}
            className="bg-blue-500 text-white p-2 rounded"
        >
            Pay Now
        </button>
    );
};

export default PayButton;




     
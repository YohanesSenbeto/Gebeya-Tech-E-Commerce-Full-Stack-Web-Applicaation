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
    <div className="cart">
      <div className="cart__items">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart__summary">
        <h4 className="summary__title">Cart Summary</h4>
        <div className="summary__price">
          <span>TOTAL: ({totalItems} items)</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className="summary__checkoutBtn">Proceed To Checkout</button>
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

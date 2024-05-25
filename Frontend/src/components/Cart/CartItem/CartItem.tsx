import React, { useState } from "react";
import { connect } from "react-redux";
import { adjustItemQty, removeFromCart } from "../../../redux/Shopping/shopping-actions";

interface CartItemProps {
  item: {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    qty: number;
  };
  adjustQty: (id: number, value: number) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState<number>(item.qty);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setInput(value);
    adjustQty(item.id, value);
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-4">
      <img className="w-16 h-16 object-cover" src={item.image} alt={item.title} />
      <div className="flex-grow mx-4">
        <p className="text-lg font-semibold">{item.title}</p>
        <p className="text-sm text-gray-500">{item.description}</p>
        <p className="text-sm text-gray-600">${item.price}</p>
      </div>
      <div className="flex items-center">
        <label htmlFor={`qty-${item.id}`} className="mr-2">Qty</label>
        <input
          className="w-12 h-8 text-center border border-gray-300 rounded-md"
          min={1}
          type="number"
          id={`qty-${item.id}`}
          value={input}
          onChange={onChangeHandler}
        />
        <button onClick={() => removeFromCart(item.id)} className="ml-2 text-red-600">
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 6l-1.5-1.5-4.5 4.5-4.5-4.5-1.5 1.5 4.5 4.5-4.5 4.5 1.5 1.5 4.5-4.5 4.5 4.5 1.5-1.5-4.5-4.5z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    adjustQty: (id: number, value: number) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id: number) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);

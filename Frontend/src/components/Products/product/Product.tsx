import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  loadCurrentItem,
  addToCart,
} from "../../../redux/shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
      <Link className="absolute inset-0 z-10" to={`/product/${product.id}`}>
        <span className="sr-only">View {product.title}</span>
      </Link>
      <img
        alt={product.title}
        className="object-cover w-full aspect-[3/2] group-hover:opacity-80 transition-opacity"
        height={300}
        src={product.imageUrl}
        width={450}
      />
      <div className="bg-[#0B2D5F] p-4">
        <h3 className="font-bold text-xl">{product.title}</h3>
        <p className="text-sm text-gray-400">{product.description}</p>
        <div className="flex flex-col items-start justify-between mt-4">
          <div className="text-2xl font-bold">{product.price}</div>
          <div className="flex items-center gap-4 mt-4">
            <div>
              <Button
                onClick={() => addToCart(product.id)}
                className="bg-[#FBBF24] text-[#0B2D5F] hover:bg-[#0B2D5F] hover:text-[#FBBF24] transition-colors"
                size="sm"
              >
                Add to Cart
              </Button>
            </div>
            <div>
              <Button
                onClick={() => loadCurrentItem(product)}
                className="bg-[#FBBF24] text-[#0B2D5F] hover:bg-[#0B2D5F] hover:text-[#FBBF24] transition-colors"
                size="sm"
              >
                <Link
                  to={`/product/${product.id}`}
                  className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0B2D5F] disabled:pointer-events-none disabled:opacity-50"
                >
                  Details
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);

import React from "react";


// Redux
import { connect } from "react-redux";

import Product from "./Product";

const Products = ({ products }) => {
    return (
<section className="bg-[#0B2D5F] text-white py-12">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
         </div>
      </div>
    </section>

    );
  };




const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
export {Products}

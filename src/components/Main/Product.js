import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="products-container">
      <div className="product-card">
        <div className="product-heading">Keep shopping for</div>
        <div className="product-image">
          <img
            src="https://m.media-amazon.com/images/I/8176OfXMLuL._AC_SY135_.jpg"
            alt=""
          />

          <img
            src="https://m.media-amazon.com/images/I/6118w6mOLsL._AC_SY135_.jpg"
            alt=""
          />

          <img
            src="https://m.media-amazon.com/images/I/6118w6mOLsL._AC_SY135_.jpg"
            alt=""
          />

          <img
            src="https://m.media-amazon.com/images/I/6118w6mOLsL._AC_SY135_.jpg"
            alt=""
          />
        </div>
        <div className="product-price"></div>
      </div>
    </div>
  );
}

export default Product;

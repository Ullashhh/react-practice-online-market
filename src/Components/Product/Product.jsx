// import React from 'react';
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
//   console.log(product);
  return (
    <div className="product-section">
      <img src={product.images[0]} alt={product.thumbnail} />
      <div className="product-section_info">
        <h2>Product: {product.title}</h2>
        <h2>Brand: {product.brand}</h2>
        <small>{product.description}</small>
        <p>Category: {product.category}</p>
        <p>
          <b>Price:</b> ${product.price}
        </p>
        <p>
          Rating: {product.rating} out of <b>5.00</b>
        </p>
        <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;

// import React from 'react';

import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import './Products.css';
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    addToDb(item.id)
  };

//   console.log(cart);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  
  useEffect(() => {
    const storedCard = getShoppingCart();
    const savedProducts = [];
    for (const id in storedCard) {
      const savedProduct = products.find((product) => product.id == id);
      console.log(savedProduct)
      if (savedProduct) {
        const quantity = storedCard[id];
        savedProduct.quantity = quantity;
        savedProducts.push(savedProduct);
      }
    }
    setCart(savedProducts);
  }, [products]);


  return (
    <div className="products-section">
      <div>
        {products.length === 0 ? (
          <Loading></Loading>
        ) : (
          products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))
        )}
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Products;
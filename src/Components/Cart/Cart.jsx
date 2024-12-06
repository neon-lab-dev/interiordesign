// import React from 'react'
// import './Cart.css'
// import Card from './Card'
// import BestSellers from '../BestSellers/BestSellers'
// import ProductLike from '../ProductLike/ProductLike'

//  const Cart = () => {
//   return (
//     <div>
//       <div className='cart-container'>
//       <p className='items'>Your Cart :- 2 items</p>

      
//       <Card />
      
//     </div>
//     <ProductLike />
//     </div>
    
//   )
// }
// export default Cart;


import React, { useEffect, useState } from "react";
import "./Cart.css";
import CardCart from "./CardCart";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // Fetch products from localStorage
    const products = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setCartProducts(products);
  }, []);

  return (
    <div>
      <div className="cart-container">
        <p className="items">Your Cart: {cartProducts.length} items</p>
        {/* Render a Card for each product */}
        {cartProducts.length > 0 ? (
          cartProducts.map((product, index) => (
            <CardCart key={index} product={product} setCartProducts={setCartProducts} />
          ))
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;

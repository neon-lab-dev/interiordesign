import React, { useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const CardCart = ({ product, setCartProducts }) => {
  const { name, image, basePrice, size, discountedPercent, productId } = product;
  const [quantity, setQuantity] = useState(product.quantity);

  const discountedPrice = basePrice - (basePrice * discountedPercent) / 100;
  const navigate = useNavigate();

  const updateCart = (newQuantity) => {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const updatedCart = cartProducts.map((item) =>
      item.productId === productId ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    setCartProducts(updatedCart);
  };

  const handleQuantityChange = (type) => {
    const newQuantity = type === "increment" ? quantity + 1 : Math.max(1, quantity - 1);
    setQuantity(newQuantity);
    updateCart(newQuantity);
  };

  const handleRemove = () => {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const updatedCart = cartProducts.filter((item) => item.productId !== productId);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    setCartProducts(updatedCart);
  };

  const handleBuyNow = () => {
    navigate(`/payment/${productId}`);
  };

  return (
    <div className="card-cart">
      <div className="card-image-cont">
        <img src={image || ""} alt={name} className="card-image-cart" />
      </div>
      <div className="card-details">
        <p className="title">{name}</p>
        <p className="size">Size: {size}</p>
        <div className="price-details">
          <span className="price1">₹{discountedPrice.toFixed(2)}</span>
          <span className="text-muted">₹{basePrice.toFixed(2)}</span>
          <span className="offer">{discountedPercent}% off</span>
        </div>
        <p className="quantity">Quantity</p>
        <div className="quantity-box">
          <button
            className="quantity-b1"
            onClick={() => handleQuantityChange("decrement")}
          >
            -
          </button>
          <p className="number">{quantity}</p>
          <button
            className="quantity-b2"
            onClick={() => handleQuantityChange("increment")}
          >
            +
          </button>
        </div>
        <div className="buy-remove">
          <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
          <button className="remove" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCart;


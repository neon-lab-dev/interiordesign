import React, { useState, useEffect } from "react";
import "./Payment.css";

const Paycard = ({ product }) => {
  const { productId, name, image, basePrice, discountedPercent, color } = product;

  const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
  const initialQuantity = cartProducts.find((item) => item.productId === productId)?.quantity || 1;
  const [quantity, setQuantity] = useState(initialQuantity);

  const updateCartProducts = (newQuantity) => {
    const updatedCart = cartProducts.map((item) =>
      item.productId === productId ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    updateCartProducts(quantity);
  }, [quantity]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const discountedPrice = (basePrice * discountedPercent) / 100;
  const totalPrice = (basePrice - discountedPrice) * quantity;
  const deliveryCharge = 100;

  return (
    <div className="card-cart-p">
      <div className="card-image-cont-p">
        <img src={image} alt={name} className="card-image" />
      </div>
      <div className="card-details-p">
        <p className="title-p">{name}</p>
        <p className="delivery">Delivered by 28-01-2024</p>
        <div className="price-details-p">
          <p className="price1-p">₹{discountedPrice}</p>
          <p className="text-muted">₹{basePrice}</p>
          <p className="offer-p">{discountedPercent}% off</p>
        </div>
        <div className="container1">
          <div className="quan-col-cont">
            <div>
              <p className="quantity-p">Quantity</p>
              <div className="quantity-box">
                <button className="quantity-b1" onClick={decreaseQuantity}>
                  -
                </button>
                <p className="number">{quantity}</p>
                <button className="quantity-b2" onClick={increaseQuantity}>
                  +
                </button>
              </div>
            </div>
            <div className="color">
              <p>Color</p>
              <div className="color-box">
                <div className="color1">{color}</div>
              </div>
            </div>
          </div>
          <div className="price">
            <div className="total-price">
              <p className="title2">Total Price-:</p>
              <p className="title3">₹{totalPrice + deliveryCharge}</p>
            </div>
            <div className="discount">
              <p className="title2">Discount-:</p>
              <p className="title3">₹{discountedPrice * quantity}</p>
            </div>
            <div className="delivery-charge">
              <p className="title2">Delivery Charge-:</p>
              <p className="title3">₹{deliveryCharge}</p>
            </div>
          </div>
        </div>
        <button className="proceed">Proceed to Pay</button>
      </div>
    </div>
  );
};

export default Paycard;

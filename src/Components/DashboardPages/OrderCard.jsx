import React from "react";
import ChairPic from "../../assets/Images/chairpic.png";

const OrderCard = () => {
  return (
    <div>
      <div className="order-card">
        <div className="order-info">
          <div>
            <p>Date: 24-01-2024</p>
            <p>Order ID: #2125465</p>
          </div>
          <p>Order Status: Shipped</p>
        </div>
        <div className="order-details">
          <img src={ChairPic} alt="Product" className="order-image" />
          <div className="product-details">
            <p>Product: Elite Series Kashmiri Willow Cricket Bat</p>
            <p>Quantity: 1</p>
            <p>Total Price: $149.99</p>
            <p>Default Shipping Address 1</p>
            <p>
              123 Main Street, Apt 4B, Cityville, State 54321, United States
            </p>
          </div>
        </div>
        <button className="cancel-button">Cancel</button>
      </div>
    </div>
  );
};

export default OrderCard;

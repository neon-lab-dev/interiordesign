import React from "react";
import "./Dashboard.css";

const RecentOrders = () => {
  return (
    <div className="recent-orders">
      <h3>Recent Orders</h3>
      <div className="order-row">
        <span>#2125465</span>
        <span>24-01-2024</span>
        <span>₹2456</span>
        <span>Shipped</span>
        <button className="details-button">View Details</button>
      </div>
      <div className="order-row">
        <span>#2125465</span>
        <span>24-01-2024</span>
        <span>₹2456</span>
        <span>Shipped</span>
        <button className="details-button">View Details</button>
      </div>
    </div>
  );
};

export default RecentOrders;

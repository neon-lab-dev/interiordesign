import React from "react";
import "./OrderCard.css";
import Sidebar from "./Sidebar";
import OrderCard from "./OrderCard";

const OrderDesign = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h2 className="welcome-text">Welcome, Kabir Sah</h2>
        <div>
          <div className="orders-header">
            <span className="orders-tab active">Recent Orders</span>
            <span className="orders-tab">Order History</span>
          </div>
          <OrderCard />
          <OrderCard />
        </div>
      </div>
    </div>
  );
};

export default OrderDesign;

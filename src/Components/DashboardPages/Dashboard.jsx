import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import AccountDetails from "./AccountDetails";
import RecentOrders from "./RecentOrders";
import AddressCard from "./AddressCard";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h2 className="welcome-text">Welcome, Kabir Sah</h2>
        <div>
          <div className="content-sections">
            <AccountDetails />
            <RecentOrders />
            <div className="address-cards">
              <AddressCard />
              <AddressCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import "./Dashboard.css";
import Sidebar from "./Sidebar";
import AccountDetails from "./AccountDetails";
import RecentOrders from "./RecentOrders";
import AddressCard from "./AddressCard";
import React, { useState, useEffect } from "react";


const Dashboard = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 900);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 900);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="dashboard-container">
      <div className="main-content">
        <div className="py-3 border-1 border-bottom border-gray d-flex align-items-center justify-content-center">
          <span className="welcome-text">Welcome, Kabir Sah</span>
        </div>
        <div>
          <div className="content-sections">
          {isLargeScreen && <Sidebar />}
            <div className="Dashcard-section">
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
    </section>
  );
};

export default Dashboard;

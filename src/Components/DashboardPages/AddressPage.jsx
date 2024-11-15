import React from "react";
import Sidebar from "./Sidebar";
import AddressCard from "./AddressCard";

const AddressPage = () => {
  return (
    <section className="dashboard-container">
      <div className="main-content">
        <div className="py-3 border-1 border-bottom border-gray d-flex align-items-center justify-content-center">
          <span className="welcome-text">Welcome, Kabir Sah</span>
        </div>
        <div>
          <div className="content-sections">
            <Sidebar />
            <div className="Dashcard-section">
              <div className="address-cards">
                <AddressCard />
              </div>
              <div>
                <button className="addbtn">Add a new Address</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressPage;

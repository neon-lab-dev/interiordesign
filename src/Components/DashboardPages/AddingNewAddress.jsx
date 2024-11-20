import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import AddressCard from "./AddressCard";
import { Link } from "react-router-dom";

const AddingNewAddress = () => {
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
                <AddressCard />
              </div>
              <form action="" className="addaddressform">
                <div className="from-details">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id=" name"
                    placeholder="Kabir sah"
                    required
                  />
                  <label htmlFor="pnumber">Phone</label>
                  <input
                    type="text"
                    id=" pnumber"
                    placeholder="+91 85398578394"
                    required
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id=" email"
                    placeholder="@Kabirsah"
                    required
                  />
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id=" address"
                    placeholder="siya ram puri ayodha"
                    required
                  />
                  <label htmlFor="landmark">Land mark</label>
                  <input
                    type="text"
                    id=" landmark"
                    placeholder="ram mandir"
                    required
                  />
                  <div className="detailaddress">
                    <label htmlFor="state">State</label>
                    <input type="text" id=" state" placeholder="Up" required />
                    <label htmlFor="town">Town/city</label>
                    <input
                      type="text"
                      id=" town"
                      placeholder="ayodha"
                      required
                    />
                    <label htmlFor="pincode">Pincode</label>
                    <input
                      type="text"
                      id=" pincode"
                      placeholder="3421"
                      required
                    />
                  </div>

                  <div className="">
                    <button type="submit" className="btn btn-base-transparent">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddingNewAddress;

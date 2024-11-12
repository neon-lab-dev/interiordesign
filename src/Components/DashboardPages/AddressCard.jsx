import React from "react";
import "./Dashboard.css";
import { FaRegEdit } from "react-icons/fa";

const AddressCard = () => {
  return (
    <div className="address-card">
      <h4>Default Shipping Address 1</h4>
      <span className="edit-icon">
        <FaRegEdit />
      </span>
      <p>Kabir Sah</p>
      <p>123 Main Street, Apt 4B, Cityville, State 54321</p>
      <p>United States</p>
    </div>
  );
};

export default AddressCard;

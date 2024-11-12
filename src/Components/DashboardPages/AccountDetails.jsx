import React from "react";
import "./Dashboard.css";
import { FaRegEdit } from "react-icons/fa";
import ProfileImg from "../../assets/Images/profileimg.jpeg";

const AccountDetails = () => {
  return (
    <div className="account-details-card">
      <h3>Account Details</h3>
      <span className="edit-icon">
        <FaRegEdit />
      </span>
      <div className="img-Name">
        <img src={ProfileImg} alt="Profile" className="profile-pic" />
        <p>Kabir Sah</p>
      </div>

      <p>Email: www.kabirsah@gmail.com</p>
      <p>Phone: 5824658726</p>
    </div>
  );
};

export default AccountDetails;

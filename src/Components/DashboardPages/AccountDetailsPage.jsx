
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import { FaRegEdit } from "react-icons/fa";
import ProfileImg from "../../assets/Images/profileimg.jpeg";

const AccountDetailsPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "Kabir Sah",
    email: "kabirsah@gmail.com",
    phone: "5824658726",
    address: "",
    profilePic: ProfileImg,
  });
  const [file, setFile] = useState(null);

  // Handlers
  const toggleEditMode = () => setIsEditing(!isEditing);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Upload file and save details logic here
    console.log("Updated User Details:", userDetails);
    console.log("Uploaded File:", file);
  };

  return (
    <section className="dashboard-container">
      <div className="main-content">
        <div className="py-3 border-1 border-bottom border-gray d-flex align-items-center justify-content-center">
          <span className="welcome-text">Welcome, {userDetails.name}</span>
        </div>
        <div className="content-sections">
          <Sidebar />
          <div className="right-section">
            <div className="account-details-card">
              <h3 className="account-details-card-title">Account Details</h3>
              <span className="edit-icon" onClick={toggleEditMode}>
                <FaRegEdit />
              </span>
              <div className="img-Name">
                <img
                  src={userDetails.profilePic}
                  alt="Profile"
                  className="profile-pic"
                />
                <span className="c">{userDetails.name}</span>
              </div>
              <div className="d-flex flex-column profileContacts gap-1">
                <p>Email: {userDetails.email}</p>
                <p>Phone: {userDetails.phone}</p>
              </div>
            </div>

            {isEditing && (
              <div className="edit-form">
                <form>
                  <div className="name-phone">
                    <div className="form-group">
                      <label>Full Name*</label>
                      <input
                        type="text"
                        name="name"
                        value={userDetails.name}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone*</label>
                      <input
                        type="tel"
                        name="phone"
                        value={userDetails.phone}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="name-phone">
                    <div className="form-group">
                      <label>Email*</label>
                      <input
                        type="email"
                        name="email"
                        value={userDetails.email}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group-upload">
                      <label>Upload pic</label>
                      <div className="input-field-container d-flex gap-1 align-items-center">
                        <label htmlFor="profilePic" className="choose-text">Choose File</label>
                        <span>No file chosen</span>
                      </div>
                      <input
                        type="file"
                        name="profilePic"
                        id="profilePic"
                        onChange={handleFileChange}
                        className="form-control upload-input d-none"
                      />
                    </div>
                  </div>

                  <button type="button" onClick={handleSave} className="save-btn">
                    Update
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AccountDetailsPage;

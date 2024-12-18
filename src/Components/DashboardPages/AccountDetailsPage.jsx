"use client";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";
import user from "../../assets/Icons/user.svg";
import { toast } from "sonner";

const AccountDetailsPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null);
  // const [file, setFile] = useState(null);

  // Fetch user details
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://interior-design-backend-nine.vercel.app/api/v1/me", { withCredentials: true });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const toggleEditMode = () => setIsEditing(!isEditing);

  // const handleFileChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      setIsEditing(false);
  
      // Fetch input values directly from the form
      const formData = new FormData();
      formData.append("full_name", e.target.full_name.value);
      formData.append("email", e.target.email.value);
      formData.append("phoneNo", e.target.phoneNo.value);
      console.log(formData.get("phoneNo"));

      // const file = formData.get("profilePic");
      // if (file) {
      //   formData.append("profilePic", file);
      // }
  
      // Send update request
      const response =  await axios.put(
        "https://interior-design-backend-nine.vercel.app/api/v1/me/update",
        formData,
        { withCredentials: true }
      );
  
      if(response.data.message){
        toast.success("Profile updated successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };
  

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="dashboard-container">
      <div className="main-content">
        <div className="py-3 border-1 border-bottom border-gray d-flex align-items-center justify-content-center">
          <span className="welcome-text">Welcome, {userData?.user?.full_name}</span>
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
                  src={user}
                  alt="Profile"
                  className="profile-pic"
                />
                <span className="c">{userData?.user?.full_name}</span>
              </div>
              <div className="d-flex flex-column profileContacts gap-1">
                <p>Email: {userData?.user?.email}</p>
                <p>Phone: {userData?.user?.phoneNo}</p>
              </div>
            </div>

            {isEditing && (
              <div className="edit-form">
                <form onSubmit={handleUpdateProfile}>
                  <div className="name-phone">
                    <div className="form-group">
                      <label>Full Name*</label>
                      <input
                        type="text"
                        name="full_name"
                        defaultValue={userData?.user?.full_name}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone*</label>
                      <input
                        type="tel"
                        name="phoneNo"
                        defaultValue={userData?.user?.phoneNo}
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
                        defaultValue={userData?.user?.email}
                        className="form-control"
                      />
                    </div>

                    {/* 
                    <div className="form-group">
                      <label>Upload pic</label>
                      <input
                        type="file"
                        name="profilePic"
                        onChange={handleFileChange}
                        className="form-control"
                      />
                    </div>
                    */}
                  </div>

                  <button
                    type="submit"
                    className="save-btn"
                  >
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

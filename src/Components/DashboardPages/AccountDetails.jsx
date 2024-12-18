import "./Dashboard.css";
import { FaRegEdit } from "react-icons/fa";
import user from "../../assets/Icons/user.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const AccountDetails = () => {
  const [userData, setUserData] = useState(null);

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
  
  return (
    <div className="account-details-card">
      <h3 className="account-details-card-title">Account Details</h3>
      <span className="edit-icon">
        <FaRegEdit />
      </span>
      <div className="img-Name">
        <img src={user} alt="Profile" className="profile-pic" />
        <span className="c">{userData?.user?.full_name}</span>
      </div>
      <div className="d-flex flex-column profileContacts gap-1">
        <p>Email: {userData?.user?.email}</p>
        <p>Phone: {userData?.user?.phoneNo}</p>
      </div>
    </div>
  );
};

export default AccountDetails;

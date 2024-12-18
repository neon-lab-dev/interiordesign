import "./Dashboard.css";
import Sidebar from "./Sidebar";
import AccountDetails from "./AccountDetails";
import RecentOrders from "./RecentOrders";
import AddressCard from "./AddressCard";
import { useState, useEffect } from "react";
import axios from "axios";


const Dashboard = () => {
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
          <span className="welcome-text">Welcome, {userData?.user?.full_name}</span>
        </div>
        <div>
          <div className="content-sections">
          {isLargeScreen && <Sidebar />}
            <div className="Dashcard-section">
              <AccountDetails userData={userData} />
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

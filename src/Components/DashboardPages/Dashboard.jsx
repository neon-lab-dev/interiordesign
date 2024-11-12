import "./Dashboard.css";
import Sidebar from "./Sidebar";
import AccountDetails from "./AccountDetails";
import RecentOrders from "./RecentOrders";
import AddressCard from "./AddressCard";

const Dashboard = () => {
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

import "./OrderCard.css"
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import OrderCard from "./OrderCard";

const OrderDesign = () => {
  return (
    <section className="dashboard-container">
      <div className="main-content">
        <div className="py-3 border-1 border-bottom border-gray d-flex align-items-center justify-content-center">
          <span className="welcome-text">Welcome, Kabir Sah</span>
        </div>
        <div>
          <div className="content-sections">
            <Sidebar />
            <div className="d-flex flex-column gap-2 w-100">
              <div className="orders-header border-gray">
                <span className="orders-tab active">Recent Orders</span>
                <span className="orders-tab">Order History</span>
              </div>
              <OrderCard />
              <OrderCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDesign;

import "./OrderCard.css";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import OrderCard from "./OrderCard";
import { NavLink } from "react-router-dom";

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
              <NavLink to="/orderdesign" className="orders-tab" activeClassName="active">
                                Recent Orders 
                            </NavLink>
                            <NavLink to="/orderhistory"  className="orders-tab" activeClassName="active">
                                Order History
                            </NavLink>
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

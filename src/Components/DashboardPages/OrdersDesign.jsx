// import "./OrderCard.css";
// import "./Dashboard.css";
// import Sidebar from "./Sidebar";
// import OrderCard from "./OrderCard";
// import { NavLink } from "react-router-dom";

// const OrderDesign = () => {
//   return (
//     <section className="dashboard-container">
//       <div className="main-content">
//         <div className="py-3 border-1 border-bottom border-gray d-flex align-items-center justify-content-center">
//           <span className="welcome-text">Welcome, Kabir Sah</span>
//         </div>
//         <div>
//           <div className="content-sections">
//             <Sidebar />
//             <div className="d-flex flex-column gap-2 w-100">
//               <div className="orders-header border-gray">
//               <NavLink to="/orderdesign" className="orders-tab" activeClassName="active">
//                                 Recent Orders 
//                             </NavLink>
//                             <NavLink to="/orderhistory"  className="orders-tab" activeClassName="active">
//                                 Order History
//                             </NavLink>
//               </div>
//               <OrderCard />
//               <OrderCard />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OrderDesign;


import React, { useEffect, useState } from "react";
import "./OrderCard.css";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import OrderCard from "./OrderCard";
import { NavLink } from "react-router-dom";
import axios from "axios";

const OrderDesign = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const userid= "674b37bacebadd82e91d28ff"

  useEffect(() => {
    const fetchOrders = async () => {

      try {
        const { data } = await axios.get(
          `https://interior-design-backend-nine.vercel.app/api/v1/orders/me/?_id=${userid}`
        );
        setOrders(data.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

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
                <NavLink to="/orderhistory" className="orders-tab" activeClassName="active">
                  Order History
                </NavLink>
              </div>
              {loading ? (
                <div className="text-center">Loading...</div>
              ) : (
                orders.map((order) => (
                  <OrderCard key={order._id} order={order} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDesign;

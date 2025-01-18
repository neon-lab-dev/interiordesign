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
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get(
          `https://interior-design-backend-nine.vercel.app/api/v1/orders/me`, 
          { withCredentials: true }
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
    <section className="dashboard-container">
      <div className="main-content">
        <div className="py-3 border-1 border-bottom border-gray d-flex align-items-center justify-content-center">
          <span className="welcome-text">Welcome, {userData?.user?.full_name}</span>
        </div>
        <div>
          <div className="content-sections">
            <Sidebar />
            <div className="d-flex flex-column gap-2 w-100">
                <NavLink to="/orderhistory" className="orders-tab" activeClassName="active">
                  Order History
                </NavLink>
              {loading ? (
                <div class="spinner-border mx-auto" role="status">
                  <span class="sr-only"></span>
                </div>
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

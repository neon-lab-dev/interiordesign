import "./OrderCard.css"
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import OrderHistoryCard from "./OrderHistoryCard";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const OrderDesign = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

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
                            {
                                loading ?
                                <p className="text-white mt-2" style={{ fontSize: "14px" }}>
                                Loading...
                              </p>
                                :
                                
                                    orders?.map(order => 
                                        <OrderHistoryCard key={order?._id} {...order} />
                                    )
                                
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderDesign;

import "./OrderCard.css"
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

const OrderDesign = () => {
    const [userData, setUserData] = useState(null);

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
                            <div className="login-container-pass d-flex  items-center justify-between login-section w-100" style={{ height: "fit-content !important" }}>
                                <form action="" className="login-form-pass justify-content-start " >
                                    <div className="form-title">Change Password</div>
                                    <div className="inp-grp">
                                        <label htmlFor="password">Enter the new password</label>
                                        <input
                                            type="text"
                                            id="password"
                                            placeholder="Enter The New Password Here"
                                        />
                                    </div>
                                    <div className="inp-grp">
                                        <label htmlFor="password">Confirm the new password</label>
                                        <input
                                            type="text"
                                            id="password"
                                            placeholder="Re-Enter The New Password Here"
                                        />
                                    </div>

                                    <div className="submit-btn" >
                                        <button type="submit" className=" btn-blue py-2 bg-colored" >
                                            Submit
                                        </button>
                                    </div>
                                    <div className="d-flex justify-content-center ">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderDesign;
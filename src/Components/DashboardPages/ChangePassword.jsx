import "./OrderCard.css"
import "./Dashboard.css";
import Sidebar from "./Sidebar";

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
                            <div className="login-container d-flex  items-center justify-between login-section w-100" style={{ height: "fit-content !important" }}>
                                <form action="" className="login-form justify-content-start py-5" >
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

                                    <div className="" style={{ width: "200px" }}>
                                        <button type="submit" className="btn btn-lg-colored py-2 bg-colored" style={{ width: "200px !important" }}>
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
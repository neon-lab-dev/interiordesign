import "./OrderCard.css"
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import AddressCard from "./AddressCard";

const Address = () => {
    return (
        <section className="dashboard-container">
            <div className="main-content">
                <div className="py-3 border-1 border-bottom border-gray d-flex align-items-center justify-content-center">
                    <span className="welcome-text">Welcome, Kabir Sah</span>
                </div>
                <div>
                    <div className="content-sections">
                        <Sidebar />
                        <div className="d-flex flex-column gap-4" style={{ width: "400px" }}>
                            <AddressCard />
                            <button className="btn-blue">Add a new Address</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Address;

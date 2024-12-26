import "./Dashboard.css";

const RecentOrders = () => {
  return (
    <div className="recent-orders d-flex flex-column gap-2">
      <span className="recent-orders-head">Recent Orders</span>
      <div className=" flex-1 flex-column gap-2 mt-2 recent-bigscreen">
        <div className="head w-100 d-flex items-center justify-start">
          <span style={{ width: "20%" }}>Order ID</span>
          <span style={{ width: "20%" }}>Order Date</span>
          <span style={{ width: "15%" }}>Order Total</span>
          <span style={{ width: "20%" }}>Status</span>
          <span style={{ width: "25%" }}></span>
        </div>
        <div className="py-3 w-100 d-flex items-center justify-between order-row">
          <span style={{ width: "20%" }}>#123456</span>
          <span style={{ width: "20%" }}>24-02-24</span>
          <span style={{ width: "15%" }}>₹200</span>
          <span style={{ width: "20%" }}>Shipped</span>
          <span style={{ width: "25%" }}>
            <span className="order-btn" >View Details</span>
          </span>
        </div>
        <div className="py-3 w-100 d-flex items-center justify-between order-row">
          <span style={{ width: "20%" }}>#123456</span>
          <span style={{ width: "20%" }}>24-02-24</span>
          <span style={{ width: "15%" }}>₹200</span>
          <span style={{ width: "20%" }}>Shipped</span>
          <span style={{ width: "25%" }}>
            <span className="order-btn" >View Details</span>
          </span>
        </div>
        <div>
        </div>
      </div>

        <div className="w-100 flex-1 flex-column gap-2 mt-2 recent-smallscreen">
          <div className="py-3 w-100 order-row" >
            <div className="d-flex order-inside">
              <div>Order ID</div>
              <div>123456</div>
            </div>
            <div className="d-flex order-inside">
              <div>Order Date</div>
              <div>24-02-24</div>
            </div>
            <div className="d-flex order-inside">
              <div>Order Total</div>
              <div>₹200</div>
            </div>
            <div className="d-flex order-inside">
              <div>Status</div>
              <div>Shipped</div>
            </div>
            <button className="order-btn" >View Details</button>
          </div>
          <div>
          </div>
        </div>
      

    </div>
  );
};

export default RecentOrders;

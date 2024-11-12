import "./Dashboard.css";

const RecentOrders = () => {
  return (
    <div className="recent-orders d-flex flex-column gap-2">
      <span className="recent-orders-head">Recent Orders</span>
      <div className="w-100 flex-1 d-flex flex-column gap-2 mt-2">
        <div className="head w-100 d-flex items-center justify-start">
          <span style={{ width: "20%" }}>Order ID</span>
          <span style={{ width: "25%" }}>Product</span>
          <span style={{ width: "15%" }}>Quantity</span>
          <span style={{ width: "20%" }}>Price</span>
        </div>
        <div className="py-3 w-100 d-flex items-center justify-between order-row">
          <span style={{ width: "20%" }}>123456</span>
          <span style={{ width: "25%" }}>Product 1</span>
          <span style={{ width: "15%" }}>1</span>
          <span style={{ width: "20%" }}>₹200</span>
          <span style={{ width: "20%" }}>
            <span className="order-btn" >Delivered</span>
          </span>
        </div>
        <div className="py-3 w-100 d-flex items-center justify-between order-row">
          <span style={{ width: "20%" }}>123456</span>
          <span style={{ width: "25%" }}>Product 1</span>
          <span style={{ width: "15%" }}>1</span>
          <span style={{ width: "20%" }}>₹200</span>
          <span style={{ width: "20%" }}>
            <span className="order-btn" >Delivered</span>
          </span>
        </div>
        <div>
        </div>
      </div>

    </div>
  );
};

export default RecentOrders;

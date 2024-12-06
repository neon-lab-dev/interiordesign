// import ChairPic from "../../assets/Images/chairpic.png";

// const OrderCard = () => {
//   return (
//     <div>
//       <div className="order-card border-bottom border-gray">
//         <div className="order-info d-flex items-center justify-between w-100">
//           <div className="d-flex flex-column gap-2">
//             <span>Date: <b>24-01-2024</b></span>
//             <span>Order ID: <b>#2125465</b></span>
//           </div>
//           <span>Order Status: <b>Shipped</b></span>
//         </div>
//         <div className="order-details">
//           <div className="order-image-container">
//             <img src={ChairPic} alt="Product" className="order-image" />
//           </div>
//           <div className="product-details d-flex flex-column gap-2 w-100">
//             <span>Product: <span className="text-white">Elite Series Kashmiri Willow Cricket Bat</span></span>
//             <span>Quantity: <span className="text-white">1</span></span>
//             <span>Total Price: <span className="text-white"> $149.99</span></span>
//             <span>Default Shipping Address <span className="text-white"> 1</span></span>
//             <span className="text-white">
//               123 Main Street, Apt 4B, Cityville,<br /> State 54321,<br /> United States
//             </span>
//             <div className="w-100 d-flex align-items-center justify-content-end">
//               <span className="order-btn" style={{ backgroundColor: "#202020" }}>Cancel</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderCard;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ChairPic from "../../assets/Images/chairpic.png";

// const OrderCard = () => {
//   const [orderData, setOrderData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch order data
//   const fetchOrderData = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post("https://interior-design-backend-nine.vercel.app/api/v1/order/new", {
//         // Sample payload to create a new order
//         shippingInfo: {
//           address: "Tulsipur 4 Banahari",
//           state: "Lumbini",
//           city: "Tulsipur",
//           landmark: "purvanchal campusabc",
//           pinCode: "22200",
//           phoneNo: "9849860150"
//         },
//         orderItems: [
//           {
//             product: "65df4e98aa35870008b3dea3",
//             quantity: 1,
//             color: "RED",
//             size: "10",
//             name: "Cynos Pro English Willow Bat",
//             image: "https://res.cloudinary.com/dqtew4zsq/image/upload/v1709133464/ay1ojmax8knpky7id6sw.png",
//             price: "38949"
//           }
//         ],
//         itemsPrice: "38949",
//         totalPrice: "38949",
//         discount: "0",
//         razorpay_payment_id: "pay_NhxvR9SvbQPm3c"
//       });

//       setOrderData(response.data); // Update order data with response
//       setLoading(false);
//     } catch (err) {
//       setError("Failed to fetch order data.");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrderData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   const { shippingInfo, orderItems, totalPrice, razorpay_payment_id } = orderData;

//   return (
//     <div>
//       <div className="order-card border-bottom border-gray">
//         <div className="order-info d-flex items-center justify-between w-100">
//           <div className="d-flex flex-column gap-2">
//             <span>Date: <b>{new Date().toLocaleDateString()}</b></span>
//             <span>Order ID: <b>#2125465</b></span>
//           </div>
//           <span>Order Status: <b>Shipped</b></span>
//         </div>
//         <div className="order-details">
//           <div className="order-image-container">
//             <img src={orderItems[0].image || ChairPic} alt="Product" className="order-image" />
//           </div>
//           <div className="product-details d-flex flex-column gap-2 w-100">
//             <span>Product: <span className="text-white">{orderItems[0].name}</span></span>
//             <span>Quantity: <span className="text-white">{orderItems[0].quantity}</span></span>
//             <span>Total Price: <span className="text-white">${totalPrice}</span></span>
//             <span>Default Shipping Address: </span>
//             <span className="text-white">
//               {shippingInfo.address}, {shippingInfo.city},<br />
//               {shippingInfo.state} {shippingInfo.pinCode},<br />
//               Phone: {shippingInfo.phoneNo}
//             </span>
//             <div className="w-100 d-flex align-items-center justify-content-end">
//               <span className="order-btn" style={{ backgroundColor: "#202020" }}>Cancel</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderCard;

import React from "react";

const OrderCard = ({ order }) => {
  const { orderItems, orderStatus, totalPrice, _id, createdAt, shippingInfo } = order;
  const orderDate = new Date(createdAt).toLocaleDateString();

  return (
    <div className="order-card border-bottom border-gray">
      <div className="order-info d-flex items-center justify-between w-100">
        <div className="d-flex flex-column gap-2">
          <span>Date: <b>{orderDate}</b></span>
          <span>Order ID: <b>#{_id.slice(-6)}</b></span>
        </div>
        <span>Order Status: <b>{orderStatus}</b></span>
      </div>
      {orderItems.map((item) => (
        <div key={item._id} className="order-details">
          <div className="order-image-container">
            <img src={item.image} alt={item.name} className="order-image" />
          </div>
          <div className="product-details d-flex flex-column gap-2 w-100">
            <span>Product: <span className="text-white">{item.name}</span></span>
            <span>Quantity: <span className="text-white">{item.quantity}</span></span>
            <span>Total Price: <span className="text-white"> ${totalPrice.toFixed(2)}</span></span>
            <span>Shipping Address:</span>
            <span className="text-white">
              {shippingInfo.address}, {shippingInfo.city},<br />
              {shippingInfo.state} {shippingInfo.pinCode},<br />
              {shippingInfo.landmark}
            </span>
            <div className="w-100 d-flex align-items-center justify-content-end">
              <span className="order-btn" style={{ backgroundColor: "#202020" }}>Cancel</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderCard;

// import { ICONS, IMAGES } from "../../assets/Assets";
// import "./Payment.css";
// import Paycard from "./Paycard";
// import ProductLike from "../ProductLike/ProductLike";

// const Payment = () => {
//   return (

//     <div>
//       <div className="payment-container">
//         <div className="details">
//           <div className="account-details">
//             <div className="header">
//               <p className="title1">Account Details</p>
//               <img src={ICONS.editSquare} alt="edit" className="edit-icon" />
//             </div>
//             <div className="name">
//               <img src={IMAGES.profile} alt="profile" className="profile-pic" />
//               <p className="title1">Kabir Sah</p>
//             </div>
//             <div className="contact">
//               <p>Email: www.kabirsah@gmail.com</p>
//               <p>Phone: 5824658726</p>
//             </div>
//           </div>
//           <div className="shipping-address">
//             <div className="header">
//               <p className="title1">Default Shipping Address 1</p>
//               <img src={ICONS.editSquare} alt="edit" className="edit-icon" />
//             </div>
//             <p className="title1">Kabir Sah</p>
//             <p>123 Main Street ,Apt 4B Cityville, State 54321United States</p>
//           </div>
//         </div>

//         <Paycard product={product}/>
//       </div>
//       <ProductLike />
//     </div>

//   )
// }

// export default Payment;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICONS, IMAGES } from "../../assets/Assets";
import "./Payment.css";
import Paycard from "./Paycard";
import ProductLike from "../ProductLike/ProductLike";

const Payment = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const selectedProduct = cartProducts.find((item) => item.productId === productId);
    setProduct(selectedProduct);
  }, [productId]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div>
      <div className="payment-container">
        <div className="details">
          <div className="account-details">
            <div className="header">
              <p className="title1">Account Details</p>
              <img src={ICONS.editSquare} alt="edit" className="edit-icon" />
            </div>
            <div className="name">
              <img src={IMAGES.profile} alt="profile" className="profile-pic" />
              <p className="title1">Kabir Sah</p>
            </div>
            <div className="contact">
              <p>Email: www.kabirsah@gmail.com</p>
              <p>Phone: 5824658726</p>
            </div>
          </div>
          <div className="shipping-address">
            <div className="header">
              <p className="title1">Default Shipping Address</p>
              <img src={ICONS.editSquare} alt="edit" className="edit-icon" />
            </div>
            <p className="title1">Kabir Sah</p>
            <p>123 Main Street, Apt 4B, Cityville, State 54321, United States</p>
          </div>
        </div>

        <Paycard product={product} />
      </div>
      <ProductLike />
    </div>
  );
};

export default Payment;

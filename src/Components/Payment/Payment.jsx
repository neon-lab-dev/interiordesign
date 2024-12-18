import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICONS } from "../../assets/Assets";
import "./Payment.css";
import Paycard from "./Paycard";
import ProductLike from "../ProductLike/ProductLike";
import axios from "axios";
import user from "../../assets/Icons/user.svg";

const Payment = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState(null);
  const [userData, setUserData] = useState(null);
  console.log(userData)
  // const [file, setFile] = useState(null);

  // Fetch user details
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
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setProducts(cartProducts);
  }, [productId]);

  console.log(products);

  if (!products) {
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
            <img src={user} alt="Profile" className="profile-pic" />
              <p className="title1">{userData?.user?.full_name}</p>
            </div>
            <div className="contact">
              <p>Email: {userData?.user?.email}</p>
              <p>Phone: {userData?.user?.phoneNo}</p>
            </div>
          </div>
          <div className="shipping-address">
            <div className="header">
              <p className="title1">Default Shipping Address</p>
              <img src={ICONS.editSquare} alt="edit" className="edit-icon" />
            </div>
            <p className="title1">{userData?.user?.full_name}</p>
            <p>123 Main Street, Apt 4B, Cityville, State 54321, United States</p>
          </div>
        </div>

        <div>
          {
            products?.map(product => 
              <Paycard key={product?.name} product={product} />
            )
          }
        </div>

        
      </div>
      <ProductLike />
    </div>
  );
};

export default Payment;

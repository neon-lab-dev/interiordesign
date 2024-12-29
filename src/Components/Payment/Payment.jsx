import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
  // const [file, setFile] = useState(null);

  // Fetch user details
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://interior-design-backend-nine.vercel.app/api/v1/me",
          { withCredentials: true }
        );
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
    return (
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="payment-container">
        <div className="details">
          <div className="account-details">
            <div className="header">
              <p className="title1">Account Details</p>
              <Link to={"/dashboard"}>
                <img src={ICONS.editSquare} alt="edit" className="edit-icon" />
              </Link>
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
              <Link to={"/address-book"}>
                <img src={ICONS.editSquare} alt="edit" className="edit-icon" />
              </Link>
            </div>
            <p className="title1">{userData?.user?.full_name}</p>
            <p>
              {userData?.user?.primaryaddress?.address},{" "}
              {userData?.user?.primaryaddress?.state}{" "}
              {userData?.user?.primaryaddress?.pin_code}
            </p>
          </div>
        </div>

        <div>
          {products?.map((product) => (
            <Paycard key={product?.name} product={product} />
          ))}
        </div>
      </div>
      <ProductLike />
    </div>
  );
};

export default Payment;

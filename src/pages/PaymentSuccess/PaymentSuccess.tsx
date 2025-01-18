import React, { useEffect, useState } from "react";
import { ICONS } from "../../assets/Assets";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const referenceName = searchQuery.get("reference");

  const [orderProducts, setOrderProducts] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("orderProducts")) || [];
    setOrderProducts(products);

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

  const totalAmount = orderProducts
    .reduce(
      (total, product) =>
        total +
        (product.basePrice - product.basePrice * (product.discountedPercent / 100)) * product.quantity,
      0
    )
    .toFixed(2);

  useEffect(() => {
    const handlePushOrderedItems = async () => {
      try {
        const primaryAddress = userData?.user?.primaryaddress;
        const secondaryaddress = userData?.user?.secondaryaddress;

        const orderItems = orderProducts.map((product) => ({
          product: product.productId,
          quantity: product.quantity,
          color: product.color,
          size: product.size,
          name: product.name,
          image: product.image,
          price: product.basePrice,
        }));

        const orderInfo = {
          shippingInfo: {
            address: primaryAddress ? primaryAddress?.address : secondaryaddress?.address,
            state: primaryAddress ? primaryAddress?.state : secondaryaddress?.state,
            city: primaryAddress ? primaryAddress?.city : secondaryaddress?.city,
            landmark: primaryAddress ? primaryAddress?.landmark : secondaryaddress?.landmark,
            pinCode: primaryAddress ? primaryAddress?.pin_code : secondaryaddress?.pin_code,
            phoneNo: `${userData?.user?.phoneNo}`,
          },
          orderItems,
          itemsPrice: totalAmount,
          discount : "0",
          totalPrice: totalAmount,
          razorpay_payment_id: referenceName,
        };

        await axios.post(
          "https://interior-design-backend-nine.vercel.app/api/v1/order/new",
          orderInfo,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        

        setSuccess(true);
      } catch (error) {
        console.error("Error placing order:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userData && orderProducts.length > 0) {
      handlePushOrderedItems();
    }
  }, [userData, orderProducts, totalAmount, referenceName]);

  if (loading) {
    return (
      <div
        className="d-flex flex-column align-items-center text-center"
        style={{ marginTop: "3rem", marginBottom: "3rem" }}
      >
        <p className="text-white" style={{ fontSize: "18px" }}>Processing your order...</p>
      </div>
    );
  }

  return success ? (
    <div
      className="d-flex flex-column align-items-center text-center"
      style={{ marginTop: "3rem", marginBottom: "3rem" }}
    >
      <img
        src={ICONS.paymentSuccess}
        alt="payment-success"
        className="img-fluid mb-4"
        style={{ width: "200px" }}
      />
      <h1 className="text-white fw-bold" style={{ fontSize: "24px" }}>
        <span className="d-lg-none">Payment Successful!!</span>
        <span className="d-none d-lg-block" style={{ fontSize: "32px" }}>
          Payment Successful!!
        </span>
      </h1>
      <p className="text-white mt-2" style={{ fontSize: "18px" }}>
        Thanks for purchasing!! We will reach out to you shortly.
      </p>
      <p className="text-white mt-2" style={{ fontSize: "14px" }}>
        Your Reference ID: {referenceName}
      </p>

      <Link
        to="/bedsheets"
        className="w-full text-white text-center d-inline-block"
        style={{
          backgroundColor: "#353434",
          padding: "0.5rem 1.25rem",
          borderRadius: "0.25rem",
          marginTop: "2rem",
        }}
      >
        Continue Shopping
      </Link>
    </div>
  ) : (
    <div
      className="d-flex flex-column align-items-center text-center"
      style={{ marginTop: "3rem", marginBottom: "3rem" }}
    >
      <p className="text-danger" style={{ fontSize: "18px" }}>Failed to process your order. Please try again.</p>
    </div>
  );
};

export default PaymentSuccess;

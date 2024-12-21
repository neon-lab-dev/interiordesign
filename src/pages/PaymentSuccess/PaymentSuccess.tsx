import React from "react";
import { ICONS } from "../../assets/Assets";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
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
        Thanks for purchasing!! We will reach out to you shortly
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
  );
};

export default PaymentSuccess;

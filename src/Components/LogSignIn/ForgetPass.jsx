import React, { useState } from "react";
import LoginImg from "../../assets/Images/loginimg.jpeg";
import { IMAGES } from "../../assets/Assets";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import API from "../../utils/api";

const ForgetPass = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!emailOrPhone) {
      setError("Please enter your email or phone number.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await API.post("/password/forgot", {
        email: emailOrPhone,
      });

      setSuccess("Password reset link sent successfully!");
      setIsLoading(false);

      setTimeout(() => navigate("/changepassword"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
      setIsLoading(false);
    }
  };

  return (
    <section className="">
      <div className="login-container d-flex  items-center justify-between login-section w-100">
        <div className="login-image-container">
          <img src={LoginImg} alt="login" className="login-image" />
          <img src={IMAGES.logo} alt="" className="logo-top" />
          <div className="image-overlay">
            <span className="logo-text">We Create Your Dream Home</span>
          </div>
        </div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="login-form justify-content-start py-5"
        >
          <div className="form-title">Forgot Password</div>
          {error && <p className="text-danger">{error}</p>}
          {success && <p className="text-success">{success}</p>}
          <div className="inp-grp">
            <label htmlFor="emailOrPhone">
              Enter the email or phone number
            </label>
            <input
              type="text"
              id="emailOrPhone"
              placeholder="Enter The Email or Phone Number"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-base-transparent"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          <div className="d-flex justify-content-center ">
            <span
              className="danger-text-neighbor"
              style={{ marginRight: "2px" }}
            >
              Didn&apos;t received?{" "}
              <span className="text-danger">Send again</span>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgetPass;

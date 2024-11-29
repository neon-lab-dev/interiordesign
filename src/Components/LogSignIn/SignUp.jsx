import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../../assets/Images/loginimg.jpeg";
import React, { useState } from "react";
import { IMAGES } from "../../assets/Assets";
import "./Login.css";
import API from "../../utils/api";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    try {
      await API.post("/register", {
        user_Name: formData.userName,
        email: formData.email,
        phoneNo: formData.phoneNo,
        password: formData.password,
        confirm_password: formData.confirmPassword,
      });

      setSuccess("Account created successfully!");
      setIsLoading(false);

      // Redirect to login
      setTimeout(() => navigate("/login"), 2000);
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
        <form className="login-form" onSubmit={handleSignUp}>
          <div className="form-title">Create an Account</div>
          {error && <p className="text-danger">{error}</p>}
          {success && <p className="text-success">{success}</p>}
          <div className="inp-grp">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter Your Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inp-grp">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inp-grp">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phoneNo"
              name="phoneNo"
              placeholder="Create Password"
              value={formData.phoneNo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inp-grp">
            <label htmlFor="password">Create Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create Strong Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="inp-grp">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-Enter Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-base-transparent"
            disabled={isLoading}
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
          <div className="d-flex justify-content-center ">
            <span
              className="danger-text-neighbor"
              style={{ marginRight: "2px" }}
            >
              Already have an account?
            </span>
            <Link to="/login" className="text-danger">
              login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;

import React, { useState } from "react";
import { IMAGES } from "../../assets/Assets";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import API from "../../utils/api";

const ForgetPass = () => {
  const [email, setEmail] = useState(""); // Changed state name to match API field
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!email) {
      setError("Please enter your email.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await API.post(
        "https://interior-design-backend-nine.vercel.app/api/v1/password/forgot",
        { email } // Updated to send only the "email" field
      );

      setSuccess("Password reset link sent successfully!");
      setIsLoading(false);

      // Redirect after showing success message
      setTimeout(() => navigate("/changepassword"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
      setIsLoading(false);
    }
  };

  return (
    <section className="">
      <div className="login-container d-flex items-center justify-between login-section w-100">
        <div className="login-image-container">
          <img src={IMAGES.loginImage} alt="login" className="login-image" />
          <img src={IMAGES.footerLogo} alt="" className="logo-top" />
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
            <label htmlFor="email">Enter your email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="d-flex justify-content-center">
            <span
              className="danger-text-neighbor"
              style={{ marginRight: "2px" }}
            >
              Didn&apos;t receive it?{" "}
              <span
                className="text-danger"
                onClick={handleSubmit}
                style={{ cursor: "pointer" }}
              >
                Send again
              </span>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgetPass;

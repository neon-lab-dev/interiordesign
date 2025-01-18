import { useState, useEffect } from "react";
import { IMAGES } from "../../assets/Assets";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ChangePass = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Extract the token from the URL
    const pathSegments = location.pathname.split('/');
    const tokenFromUrl = pathSegments[pathSegments.length - 1];
    setToken(tokenFromUrl);
  }, [location.pathname]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!password || !confirmPassword) {
      setError("Both fields are required.");
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }
    const resetPasswordData = {
      password,
      confirmPassword
    }

    try {
      const response = await axios.put(
        `https://interior-design-backend-nine.vercel.app/api/v1/password/reset/${token}`,
        resetPasswordData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setSuccess("Password reset successfully!");
        setIsLoading(false);
      }

      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
      setIsLoading(false);
    }
  };

  return (
    <section className="">
      <div className="login-container d-flex  items-center justify-between login-section w-100">
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
          <div className="form-title">Reset Password</div>
          {error && <p className="text-danger">{error}</p>}
          {success && <p className="text-success">{success}</p>}
          <div className="inp-grp">
            <label htmlFor="password">Enter the new password</label>
            <input
              type="text"
              id="password"
              placeholder="Enter The New Password Here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="inp-grp">
            <label htmlFor="password">Confirm the new password</label>
            <input
              type="text"
              id="password"
              placeholder="Re-Enter The New Password Here"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
        </form>
      </div>
    </section>
  );
};

export default ChangePass;

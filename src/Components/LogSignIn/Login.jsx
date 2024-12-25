import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../../assets/Images/loginimg.jpeg";
import { IMAGES } from "../../assets/Assets";
import "./Login.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response  = await axios.post(
      "https://interior-design-backend-nine.vercel.app/api/v1/login",
      { email, password },
      { withCredentials: true }
    );

    const user = {
      _id : response?.data?.user?._id,
      name : response?.data?.user?.full_name,
      email : response?.data?.user?.email,
    };

    localStorage.setItem("user", JSON.stringify(user));
    navigate("/dashboard");
    window.location.reload();
  } catch (err) {
    console.error("Login failed:", err);
    setError(err.response?.data?.message || "Something went wrong.");
  }
};

  return (
    <section className="">
      <div className="login-container d-flex  items-center justify-between login-section w-100">
        <div className="login-image-container">
          <img src={LoginImg} alt="login" className="login-image" />
          <img src={IMAGES.footerLogo} alt="" className="logo-top" />
          <div className="image-overlay">
            <span className="logo-text">We Create Your Dream Home</span>
          </div>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-title">Login</div>
          {error && <p className="text-danger">{error}</p>}
          <div className="inp-grp">
            <label htmlFor="email">Email or user name</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email or Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inp-grp">
            <label htmlFor="email">Enter your password </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div
            className="d-flex w-100 align-items-center justify-content-end text-danger"
            style={{ marginTop: "-14px" }}
          >
            <Link to="/forgetpassword" className="text-danger">
              Forgot Password?
            </Link>
          </div>
          <button type="submit" className="btn btn-base-transparent">
            Login
          </button>
          <div className="d-flex justify-content-center ">
            <span
              className="danger-text-neighbor"
              style={{ marginRight: "2px" }}
            >
              Don&apos;t have an account?
            </span>
            <Link to="/signup" className="text-danger">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
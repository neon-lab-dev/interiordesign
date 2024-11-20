import { Link } from "react-router-dom";
import LoginImg from "../../assets/Images/loginimg.jpeg";
import { IMAGES } from "../../assets/Assets";
import "./Login.css";

const Login = () => {
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
        <form action="" className="login-form">
          <div className="form-title">Login</div>
          <div className="inp-grp">
            <label htmlFor="email">Email or user name</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email or Username"
            />
          </div>
          <div className="inp-grp">
            <label htmlFor="email">Enter your password </label>
            <input type="email" id="email" placeholder="Enter Password" />
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

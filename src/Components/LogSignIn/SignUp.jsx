import { Link } from "react-router-dom";
import LoginImg from "../../assets/Images/loginimg.jpeg";
import { IMAGES } from "../../assets/Assets";
import "./Login.css";

const SignUp = () => {
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
          <div className="form-title">Create an Account</div>
          <div className="inp-grp">
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" placeholder="Enter Username" />
          </div>
          <div className="inp-grp">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter Email" />
          </div>
          <div className="inp-grp">
            <label htmlFor="phone">Phone</label>
            <input type="phone" id="password" placeholder="Create Password" />
          </div>
          <div className="inp-grp">
            <label htmlFor="password">Create Password</label>
            <input
              type="password"
              id="password"
              placeholder="Create Strong Password"
            />
          </div>
          <div className="inp-grp">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-Enter Password"
            />
          </div>
          <button type="submit" className="btn btn-base-transparent">
            Login
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

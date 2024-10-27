import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/Images/loginimg.jpeg";
import "./Login.css";

const preventRefresh = (e) => {
  e.preventDefault();
};

const Login = () => {
  return (
    <>
      <div className="page-container">
        <div className="content-container">
          <div className="LoginPage">
            <div className="LogImg">
              <img src={LoginImg} alt="Description" />
              <h5 className="overlay-text">We Create Your Dream Home</h5>
            </div>
            <div className="logForm">
              <div className="form">
                <div className="heading">Login</div>
                <form action="">
                  <div className="inputField">
                    <label htmlFor="name">Email or user name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your Email Or username"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Enter your Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                    />
                    <p>
                      <Link className="create">Forget password</Link>
                    </p>
                  </div>

                  <button type="submit" onClick={preventRefresh}>
                    Login
                  </button>
                </form>
                <p>
                  Don't have an account ?
                  <Link className="create" to="/signup">
                    Create an Account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

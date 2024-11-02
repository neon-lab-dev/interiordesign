import React from "react";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/Images/loginimg.jpeg";
import "./Login.css"; 

const SignUp = () => {
  const preventRefresh = (e) => {
    e.preventDefault();
  };

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
                <div className="heading">Create an account</div>
                <form action="">
                  <div className="inputField">
                    <label htmlFor="name">User name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your Email"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      id="number"
                      placeholder="Enter your number"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Create Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Confirm Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                    />
                  </div>

                  <button type="submit" onClick={preventRefresh}>
                    Create
                  </button>
                </form>
                <p>
                  Already have an account?
                  <Link className="create" to="/login">
                    Login
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

export default SignUp;

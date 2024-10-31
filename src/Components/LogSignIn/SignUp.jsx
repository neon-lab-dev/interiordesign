import React from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginImg from "../../assets/Images/loginimg.jpeg";
import "./Login.css";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
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
                <form action="" onSubmit={handleSubmit}>
                  <div className="inputField">
                    <label htmlFor="name">User name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your Email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      id="number"
                      placeholder="Enter your number"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Create Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Confirm Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                      required
                    />
                  </div>

                  <button type="submit">Create</button>
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

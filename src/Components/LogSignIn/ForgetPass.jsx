import React from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginImg from "../../assets/Images/loginimg.jpeg";
import "./Forgetpass.css";
import ChangePass from "./ChangePass";

const SignUp = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/changepassword");
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
                <div className="heading">Forget Password</div>
                <form action="" onSubmit={handleSubmit}>
                  <div className="inputField">
                    <label htmlFor="name">
                      Enter the email or phone number
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email or phone number"
                      required
                    />
                  </div>

                  <button type="submit">Submit</button>
                </form>
                <p>
                  Don&apos;t receive?
                  <Link className="create" to="/forgetpassword">
                    Sent again
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

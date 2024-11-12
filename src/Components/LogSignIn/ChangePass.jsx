import React from "react";
import LoginImg from "../../assets/Images/loginimg.jpeg";
import { useNavigate } from "react-router-dom";
import "./Forgetpass.css";

const ChangePass = () => {
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
                <div className="heading">Change Password</div>
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="password">Enter new Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Confirm new Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                      required
                    />
                  </div>

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePass;

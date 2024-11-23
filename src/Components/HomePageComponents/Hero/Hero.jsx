import React, { useState } from "react";
import "./Hero.css";
const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    purpose: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <div class="position-relative hero-container">
      <div className="container-fluid  text-white gradient-overlay">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-7 p-5 " style={{ margin: "40px" }}>
            <h1 className="custom-heading">
              Transforming Spaces, <br></br>
              <span className="custom-heading">Elevating Lifestyles</span>
            </h1>
            <p className="custom-text-2">
              Experience the art of thoughtful design, where every detail is
              tailored to reflect your style and aspirations.
            </p>
            <div className="d-flex justify-content-start mt-4">
            <span
                className=" hero-text-card hero-card-text-style"
                style={{
                  backgroundColor: "hsl(0, 0%, 100%)", // Base white background
                  backgroundImage:
                    "radial-gradient(circle farthest-side at center, hsl(0, 0%, 0%) 60%, hsl(0, 0%, 10%) 100%)", // Radial gradient
                }}
              >BESPOKE INTERIOR DESIGN</span>
                
                <span
                className=" hero-text-card hero-card-text-style"
                style={{
                  backgroundColor: "hsl(0, 0%, 100%)", // Base white background
                  backgroundImage:
                    "radial-gradient(circle farthest-side at center, hsl(0, 0%, 0%) 60%, hsl(0, 0%, 10%) 100%)", // Radial gradient
                }}
              >
                Hassle-Free Process
              </span>
              <span
                className=" hero-text-card hero-card-text-style"
                style={{
                  backgroundColor: "hsl(0, 0%, 100%)", // Base white background
                  backgroundImage:
                    "radial-gradient(circle farthest-side at center, hsl(0, 0%, 0%) 60%, hsl(0, 0%, 10%) 100%)", // Radial gradient
                }}
              >
                A-Z Execution & Services
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-4 p-3">
            <div className="">
              <div
                className="p-4  rounded-3 shadow "
                style={{
                  backgroundColor: "hsl(0, 0%, 100%)", // Base white background
                  backgroundImage:
                    "radial-gradient(circle farthest-side at center, hsl(0, 0%, 0%) 60%, hsl(0, 0%, 10%) 100%)", // Radial gradient
                }}
              >
                <h2 className="mb-4 text-style">Your Dream Our Design</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="input-text-style ">
                      Enter your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="input-box input-box-height"
                      placeholder="Kabir Sah"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="input-text-style">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="input-box input-box-height"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="purpose" className="input-text-style">
                      Purpose
                    </label>
                    <textarea
                      id="purpose"
                      className="input-box"
                      rows="3"
                      placeholder="Want to know about 500 office chair cost"
                    ></textarea>
                  </div>
                  <button type="submit" className=" w-100 custom-text-2 btn-bg">
                    Get Free Quote
                  </button>

                  <p className="custom-text">  
                    By submitting this form, you agree to our{" "}
                    <a href="#privacy" className="warning-text">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#terms" className="warning-text">
                      Terms of Service
                    </a>
                    , granting us permission to use your personal information as
                    specified in the privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

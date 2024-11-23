import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IMAGES } from "../../../assets/Assets";
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div
      className="container-fluid text-light py-5"
      style={{ background:"#181818" , padding:"90px" }}
    > <p className="heading mb-5" >Lets create a beautiful space together!</p>
      <div className="row align-items-center h-100 ">
        {/* Contact Form Section */}
        <div className="col-md-4">
          <div className="p-4  p-4  rounded-3 shadow "
                style={{
                  backgroundColor: "hsl(0, 0%, 100%)", // Base white background
                  backgroundImage:
                    "radial-gradient(circle farthest-side at center, hsl(0, 0%, 0%) 60%, hsl(0, 0%, 10%) 100%)", // Radial gradient
                }}
              > 
            <h2 className="mb-4 text-style">Contact Us</h2>
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

        {/* Image Section */}
        <div className="col-md-8 text-center">
          <img
            src={IMAGES.contact}
            alt="Decorative design"
            className="img-fluid rounded-3"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

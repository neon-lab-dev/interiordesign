import { useState } from "react";
import "./Hero.css";
import { auto } from "@popperjs/core";
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
    <div className="position-relative hero-container">
      < div className="container-fluid text-white gradient-overlay">
        <div className="row align-items-center">
          {/* Left Section */}
          <section
            className="col-md-7  "
            style={{ margin: auto }}
          >
            <h1 className="custom-heading">
              Transforming Spaces, <br />
              <span className="custom-heading">Elevating Lifestyles</span>
            </h1>
            <p className="custom-text-2">
              Experience the art of thoughtful design, where every detail is
              tailored to reflect your style and aspirations.
            </p>
            <div className="d-flex flex-wrap justify-content-start mt-4">
              <span
                className="hero-text-card hero-card-text-style mb-2"
                style={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  backgroundImage:
                    "radial-gradient(circle farthest-side at center, hsl(0, 0%, 0%) 60%, hsl(0, 0%, 10%) 100%)",
                }}
              >
                BESPOKE INTERIOR DESIGN
              </span>

              <span
                className="hero-text-card hero-card-text-style mb-2"
                style={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  backgroundImage:
                    "radial-gradient(circle farthest-side at center, hsl(0, 0%, 0%) 60%, hsl(0, 0%, 10%) 100%)",
                }}
              >
                Hassle-Free Process
              </span>
              <span
                className="hero-text-card hero-card-text-style mb-2"
                style={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  backgroundImage:
                    "radial-gradient(circle farthest-side at center, hsl(0, 0%, 0%) 60%, hsl(0, 0%, 10%) 100%)",
                }}
              >
                A-Z Execution & Services
              </span>
            </div>
          </section>

          {/* Right Section */}
          <section className="col-md-4 p-3 mr-auto">
            <div className="">
              <div
                className="p-4 rounded-3 shadow"
                style={{
                  backgroundColor: "hsl(0, 0%, 100%)",
                  backgroundImage:
                    "radial-gradient(circle farthest-side at center, hsl(0, 0%, 0%) 60%, hsl(0, 0%, 10%) 100%)",
                }}
              >
                <h2 className="mb-4 text-style">Your Dream Our Design</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="input-text-style">
                      Enter your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="input-box input-box-height"
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
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="purpose" className="input-text-style">
                      Purpose
                    </label>
                    <textarea
                      id="purpose"
                      className="input-box p-1"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-100 custom-text-2 btn-bg">
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;

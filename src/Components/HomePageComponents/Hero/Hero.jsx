import { useRef } from "react";
import "./Hero.css";
import { auto } from "@popperjs/core";
import emailjs from '@emailjs/browser';
import { toast, Toaster } from "sonner";
const Hero = () => {

  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const emailPromise = emailjs.sendForm(
      "service_xhg76qm",
      "template_e2vpmsa",
      form.current,
      {
        publicKey: "Vy_QghFw_oD9eMuwv",
      }
    );

    toast.promise(
      emailPromise,
      {
        loading: "Sending your email...",
        success: "Thanks for your interest. We will contact you soon!",
        error: "Failed to send the email. Please try again later.",
      },
      {
        style: {
          padding: "10px",
          borderRadius: "5px",
        },
        duration: 3000,
      }
    );

    emailPromise
      .then(() => {
        form.current.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
      });
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
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <label htmlFor="name" className="input-text-style">
                      Enter your name
                    </label>
                    <input
                      name="from_name"
                      type="text"
                      id="from_name"
                      className="input-box input-box-height"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="input-text-style">
                      Phone
                    </label>
                    <input
                      type="text"
                      id="mobileNumber"
                      name="mobileNumber"
                      className="input-box input-box-height"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="input-text-style">
                      Purpose
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="input-box text-white p-1"
                      rows="3"
                      placeholder="Want to know about 500 office chair cost"
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

      <Toaster position="top-center" />
    </div>
  );
};

export default Hero;

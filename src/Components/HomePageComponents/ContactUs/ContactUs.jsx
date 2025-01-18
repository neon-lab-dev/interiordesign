/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ICONS, IMAGES } from "../../../assets/Assets";
import "./ContactUs.css";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const methods = useForm({
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  // Ref for the form element
  const form = useRef(null);

  const sendEmail = () => {
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ygoo2gq",
        "template_26l0mws",
        form.current,
        "8nmGK0iwW_6YgkO8f"
      )
      .then(
        () => {
          toast.success("Thanks for your interest. We will contact you soon!");
          methods.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Failed! Try again.");
        }
      );
  };

  return (
    <FormProvider {...methods}>
      <section
        className="container-fluid text-light py-5 g-3"
        style={{ background: "#181818", padding: "90px" }}
      >
        <p className="heading mb-5">Let's create a beautiful space together!</p>
        <div className="row align-items-center h-100">
          <div className="col-md-7 d-flex align-items-center justify-content-center order-md-2">
            <img
              src={IMAGES.contact}
              alt="Decorative design"
              className="img-fluid rounded-3"
              style={{
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <div className="col-md-5 order-md-1" style={{
                backgroundColor: "hsl(0, 0%, 100%)",
                backgroundImage:
                  "radial-gradient(circle farthest-side at center, hsl(0, 0%, 0%) 60%, hsl(0, 0%, 10%) 100%)",
              }}>
          <div className="text-white p-4 w-full d-flex flex-column">
            <div className="card-body">
            <h2 className="text-style">GET IN TOUCH</h2>
                <p className="card-text">
                2nd floor, iWorkk, 90, Mehrauli-Gurgaon Rd, Industrial Development Area, Sector 16, Gurugram, Haryana 122007

                </p>
                <a href="tel:9953520512" className="card-text">
                    (+91) 9953520512
                </a>
                <a href="emailto:spaceframe.co.in@gmail.com" className="card-text">
                spaceframe.co.in@gmail.com
                </a>
                <a href="https://g.co/kgs/4zDDFJe" target="_blank" rel="noopener noreferrer" className="card-link text-white">
                    Open in Google Maps &rarr;
                </a>
            </div>
        </div>
            <div
              className="p-4 rounded-3 shadow h-100 d-flex flex-column justify-content-between"
              
            >
              <h2 className="mb-4 text-style">Contact Us</h2>
              <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="input-text-style">
                    Enter your name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className={`input-box input-box-height ${
                      errors.fullName ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your name"
                    {...register("fullName", { required: "Name is required" })}
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback">
                      {errors.fullName.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="mobileNumber" className="input-text-style">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="mobileNumber"
                    className={`input-box input-box-height ${
                      errors.mobileNumber ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your mobile number"
                    {...register("mobileNumber", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit phone number",
                      },
                    })}
                  />
                  {errors.mobileNumber && (
                    <div className="invalid-feedback">
                      {errors.mobileNumber.message}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="input-text-style">
                    Purpose
                  </label>
                  <textarea
                    id="message"
                    className={`input-box ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    rows="3"
                    placeholder="Want to know about 500 office chair cost"
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">
                      {errors.message.message}
                    </div>
                  )}
                </div>

                <button type="submit" className="w-100 custom-text-2 btn-bg">
                  Get Free Quote
                </button>
              </form>
              <a
                href="https://g.co/kgs/4zDDFJe"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-text "
              >
                <img
                  src={ICONS.address}
                  alt="Address Icon"
                  height={16}
                  className="me-1"
                />
                2nd floor, iWorkk, 90, Mehrauli-Gurgaon Rd, Industrial
                Development Area, Sector 16, Gurugram, Haryana 122007
              </a>
              <p className="custom-text mt-3">
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
            </div>
          </div>
        </div>
      </section>
    </FormProvider>
  );
};

export default ContactUs;

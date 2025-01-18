import { useRef } from "react";
import "./Hero.css";
import { auto } from "@popperjs/core";
import emailjs from '@emailjs/browser';
import { toast, Toaster } from "sonner";
import { FormProvider, useForm } from "react-hook-form";
const Hero = () => {

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
        "service_ygoo2gq", // Replace with your service ID
        "template_26l0mws", // Replace with your template ID
        form.current,
        "8nmGK0iwW_6YgkO8f" // Replace with your public key
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
       <div className="position-relative hero-container ">
        
      < div className="container-fluid text-white gradient-overlay ">
      <Toaster />
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
              </div>
            </div>
          </section>
        </div>
      </div>

     
    </div>
    </FormProvider>
   
  );
};

export default Hero;

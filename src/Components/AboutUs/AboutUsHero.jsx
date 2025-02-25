import React from "react";

const AboutUsHero = () => {
  return (
    <div className="position-relative text-white" style={{ height: "100vh" }}>
      {/* Background Image */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: "url('src/assets/Images/aboutUs.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
        }}
      ></div>

      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

      {/* Content */}
      <div className="position-relative container h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="row w-100">
          {/* Left Box - Our Aim */}
          <div className="col-md-6">
            <div className="bg-dark bg-opacity-75 text-white p-4 rounded shadow mb-3" style={{ maxWidth: "300px" }}>
              <h4 className="fw-bold">Our Aim</h4>
              <p className="text-light small">
                Our company aims to offer contemporary and unique solutions for interior spaces. We offer complete interior design and execution services/solutions.
              </p>
            </div>
          </div>

          {/* Right Box - Founded By */}
          <div className="col-md-6 text-end">
            <div className="bg-dark bg-opacity-75 text-white p-3 rounded shadow d-inline-block">
              <p className="text-light small mb-1">Founded By</p>
              <h5 className="fw-bold">Ar. Lakshay Arora</h5>
            </div>
          </div>
        </div>

        {/* About Us Heading */}
        <h1 className="position-absolute bottom-0 text-white fw-bold mb-4">About Us</h1>
      </div>
    </div>
  );
};

export default AboutUsHero;

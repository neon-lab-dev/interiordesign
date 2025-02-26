import React from "react";

const AboutUsHero = () => {
  return (
    <div className="position-relative text-white heroImg">
      {/* Background Image */}
      <div className="hero-background"></div>

      {/* Content */}
      <div className="container position-relative d-flex flex-column gap-5 justify-content-center align-items-center">
        <div className="row w-100 h-100">
          {/* Left Card - Our Aim */}
          <div className="col-md-6 d-flex align-items-start card1style">
            <div
              className="bg-dark bg-opacity-50 text-white p-2 rounded shadow"
              style={{ maxWidth: "345px" }}
            >
              <h4 className="fw-bold">Our Aim</h4>
              <p className="herotextarea">
                Our company aims to offer contemporary and unique solutions for
                interior spaces. We offer complete interior design and execution
                services/solutions.
              </p>
            </div>
          </div>

          {/* Right Card - Founded By */}
          <div className="col-md-6 d-flex justify-content-end align-items-end card2style">
            <div className="bg-dark bg-opacity-50 text-white p-2 rounded shadow">
              <p className="small herotextarea mb-1">Founded By</p>
              <h5 className="fw-bold">Ar. Lakshay Arora</h5>
            </div>
          </div>
        </div>

        {/* About Us Heading */}
        <h1 className="position-absolute bottom-0 text-white fw-bold mb-4">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default AboutUsHero;

import React from "react";
import SectionHeading from "../../Components/Reusable/SectionHeading/SectionHeading";
import { IMAGES } from "../../assets/Assets";
import { points, points2, points3 } from "./AboutUs.constant";
import "./AboutUs.css"

const Page = () => {
  return (
    <div>
      <div className="position-relative text-white heroImg">
      {/* Background Image */}
      <div className="hero-background"></div>

      {/* Content */}
      <div className="container position-relative heroImg d-flex flex-column gap-5 justify-content-center align-items-center  ">
        <div className="row w-100 h-100">
          {/* Left Card - Our Aim */}
          <div className="col-md-6  d-flex align-items-start card1style ">
            <div className="bg-dark bg-opacity-50 text-white p-2 rounded shadow" style={{ maxWidth: "345px" }}>
              <h4 className="fw-bold">Our Aim</h4>
              <p className="text-light herotextarea   ">
                Our company aims to offer contemporary and unique solutions for interior spaces. We offer complete interior design and execution services/solutions.
              </p>
            </div>
          </div>

          {/* Right Card - Founded By */}
          <div className="col-md-6 d-flex justify-content-end align-items-end card2style">
            <div className="bg-dark bg-opacity-50 text-white p-2 rounded shadow">
              <p className="text-light small herotextarea mb-1">Founded By</p>
              <h5 className="fw-bold">Ar. Lakshay Arora</h5>
            </div>
          </div>
        </div>

        {/* About Us Heading */}
        <h1 className="position-absolute bottom-0 text-white fw-bold mb-4">About Us</h1>
      </div>
    </div>
      <div className="card1style" >
        <section
          className="container-fluid"
          style={{
            backgroundColor: "#181818",
            padding: "40px 40px 80px 80px",
          }}
        >
          <div className="row d-flex align-items-center ">
            {/* Left Side Content */}
            <div className="col-lg-6 col-12 mb-4 ">
              <SectionHeading
                subHeading="WHO WE ARE"
                heading="get to know us"
                subHeadingStyle="text-center text-lg-start"
                headingStyle="text-center text-lg-start"
              />
              <div
                style={{
                  color: "rgba(200, 200, 200, 0.8)",
                  fontSize: "16px",
                  marginTop: "48px",
                }}
              >
                {points.map((point, index) => (
                  <div key={index} style={{ marginBottom: "24px" }}>
                    <p
                      className="text-center text-lg-start"
                      style={{
                        color: "rgba(200, 200, 200, 0.60)",
                        fontFamily: "Verdana",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "normal",
                        letterSpacing: "0.16px",
                        marginTop: "16px",
                      }}
                    >
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Image */}
            <div className="col-lg-6 col-12">
              <img
                src={IMAGES.aboutUs1}
                alt="Design example"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </section>

        <section
          className="container-fluid"
          style={{
            backgroundColor: "#181818",
            padding: "40px 40px 80px 80px",
          }}
        >
          <div className="row d-flex align-items-center">
            {/* Right Side Content (Will be first on small screens) */}
            <div className="col-lg-7 col-12 mb-4 order-0 order-lg-1">
              <SectionHeading
                subHeading="we strive to"
                heading="Our Mission"
                subHeadingStyle="text-center text-lg-start"
                headingStyle="text-center text-lg-start"
              />
              <div
                style={{
                  color: "rgba(200, 200, 200, 0.8)",
                  fontSize: "16px",
                  marginTop: "48px",
                }}
              >
                {points2.map((point, index) => (
                  <div key={index} style={{ marginBottom: "24px" }}>
                    <p
                      className="text-center text-lg-start"
                      style={{
                        color: "rgba(200, 200, 200, 0.60)",
                        fontFamily: "Verdana",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "normal",
                        letterSpacing: "0.16px",
                        marginTop: "16px",
                      }}
                    >
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Side Image (Will be below text on small screens) */}
            <div className="col-lg-5 col-12 order-1 order-lg-0">
              <img
                src={IMAGES.aboutUs2}
                alt="Design example"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </section>

        <section
               className="container-fluid"
               style={{
                 backgroundColor: "#181818",
                 padding: "40px 40px 80px 80px",
               }}
             >
               <div className="row d-flex align-items-center ">
                 {/* Left Side Content */}
                 <div className="col-lg-7 col-12 mb-4 ">
                   <SectionHeading
                     subHeading="functional regions"
                     heading="Serviceable Areas"
                     subHeadingStyle="text-center text-lg-start"
                     headingStyle="text-center text-lg-start"
                   />
                   <div
                     style={{
                       color: "rgba(200, 200, 200, 0.8)",
                       fontSize: "16px",
                       marginTop: "48px",
                     }}
                   >
                     {points3.map((point, index) => (
                       <div key={index} style={{ marginBottom: "24px" }}>
                         <p className="text-center text-lg-start"
                           style={{
                             color: "rgba(200, 200, 200, 0.60)",
                             fontFamily: "Verdana",
                             fontSize: "16px",
                             fontWeight: "400",
                             lineHeight: "normal",
                             letterSpacing: "0.16px",
                             marginTop: "16px",
                           }}
                         >
                           {point.description}
                         </p>
                       </div>
                     ))}
                   </div>
                 </div>
         
                 {/* Right Side Image */}
                 <div className="col-lg-5 col-12">
                   <img
                     src={IMAGES.aboutUs3}
                     alt="Design example"
                     style={{
                       width: "100%",
                       borderRadius: "10px",
                       objectFit: "cover",
                     }}
                   />
                 </div>
               </div>
             </section>
      </div>
    </div>
  );
};

export default Page;

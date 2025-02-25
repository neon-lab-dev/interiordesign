// Section.js
const AboutUsSection = ({ subHeading, heading, points, image, reverse }) => {
    return (
      <section
        className="container-fluid"
        style={{ backgroundColor: "#181818", padding: "40px 40px 80px 80px" }}
      >
        <div className="row d-flex align-items-center">
          {/* Content */}
          <div className={`col-lg-${reverse ? "7 order-0" : "6"} col-12 mb-4`}>
            <SectionHeading
              subHeading={subHeading}
              heading={heading}
              subHeadingStyle="text-center text-lg-start"
              headingStyle="text-center text-lg-start"
            />
            <div
              style={{ color: "rgba(200, 200, 200, 0.8)", fontSize: "16px", marginTop: "48px" }}
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
  
          {/* Image */}
          <div className={`col-lg-${reverse ? "5 order-1" : "6"} col-12`}>
            <img
              src={image}
              alt="Design example"
              style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUsSection;
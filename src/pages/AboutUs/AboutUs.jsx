import SectionHeading from "../../Components/Reusable/SectionHeading/SectionHeading";
import { IMAGES } from "../../assets/Assets";
import { points, points2, points3 } from "./AboutUs.constant";
import "./AboutUs.css";

const Page = () => {
  const bgImage =
  window.innerWidth <= 525
    ? IMAGES.aboutUsHero
    : window.innerWidth <= 768
    ? IMAGES.aboutUsHero
    : IMAGES.aboutUsHero;
  return (
    <div style={{ backgroundColor: "#181818" }}>
      <div className="position-relative text-white  ">
        {/* Background Image */}
        <div
  className="hero-background"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
></div>

        {/* Content */}
        <div className="container position-relative heroImg d-flex flex-column gap-5 justify-content-center align-items-center  ">
          <div className="row  heroImg w-100 ">
            <div className="col-md-6 d-flex align-items-start align card1style ">
              <div
                className="bg-dark bg-opacity-50 text-white p-2 rounded shadow"
                style={{ maxWidth: "425px" }}
              >
                <h4 className="fw-bold  heroheading2 ">Our Aim</h4>
                <p className=" herotextarea   ">
                  Our company aims to offer contemporary and unique solutions
                  for interior spaces. We offer complete interior design and
                  execution services/solutions.
                </p>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-end align-items-end card2style">
              <div className="bg-dark bg-opacity-75 text-white p-2 rounded shadow">
                <p className=" heroheading1 ">Founded By</p>
                <h5 className="fw-bold heroheading3">Ar. Lakshay Arora</h5>
              </div>
            </div>
          </div>

          {/* About Us Heading */}
          <h1
            className="position-absolute bottom-0  fw-bold mb-4"
            style={{ color: "#FFFFFFBF" }}
          >
            About Us
          </h1>
        </div>
      </div>

      <div className="sectionmargin">
        <section
          className="container-fluid"
          style={{
            backgroundColor: "#181818",
            padding: "0px 0px 80px 80px",
          }}
        >
          <div className="row d-flex align-items-center  ">
            {/* Left Side Content */}
            <div className="col-lg-6 col-12 mb-4 rightmargin">
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
            <div className="col-lg-7 col-12 mb-4 order-0 order-lg-1 leftmargin ">
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
                      className="text-center text-lg-start "
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
          className="container-fluid py-5"
          style={{ backgroundColor: "#181818", padding: "40px 40px 80px 80px" }}
        >
          <div className="row d-flex align-items-center">
            {/* Left Side Content */}
            <div className="col-lg-7 col-12 rightmargin">
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
                  <div key={index} className="mb-4 ">
                    <p
                      className="text-center text-lg-start "
                      style={{
                        color: "rgba(200, 200, 200, 0.60)",
                        fontFamily: "Verdana",
                        fontSize: "16px",
                        fontWeight: "400",
                        lineHeight: "1.8",
                        letterSpacing: "0.5px",
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
            <div className="col-lg-5 col-12 d-flex justify-content-center">
              <img
                src={IMAGES.aboutUs3}
                alt="Design example"
                style={{
                  width: "100%",
                  minHeight: "300px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
    //    <div>
    //    <Section
    //      subHeading="WHO WE ARE"
    //      heading="get to know us"
    //      points={points}
    //      image={IMAGES.aboutUs1}
    //    />
    //    <Section
    //      subHeading="we strive to"
    //      heading="Our Mission"
    //      points={points2}
    //      image={IMAGES.aboutUs2}
    //      reverse
    //    />
    //    <Section
    //      subHeading="functional regions"
    //      heading="Serviceable Areas"
    //      points={points3}
    //      image={IMAGES.aboutUs3}
    //    />
    //  </div>
  );
};

export default Page;

import { IMAGES } from "../../../assets/Assets";
import SectionHeading from "../../Reusable/SectionHeading/SectionHeading";
import { points } from "./whoWeAre.constants";

const WhoWeAre = () => {
  return (
    <section
      className="container-fluid"
      style={{
        backgroundColor: "#181818",
        padding: "40px 40px 80px 80px",
      }}
    >
      <div className="row">
        {/* Left Side Content */}
        <div className="col-lg-6 col-12 mb-4">
          <SectionHeading
            subHeading="WHO WE ARE"
            heading="Transforming Spaces with Innovative Design Solutions"
            subHeadingStyle="text-start"
            headingStyle="text-start"
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
                <strong
                  style={{
                    color: "rgba(255, 255, 255, 0.60)",
                    fontFamily: "Verdana",
                    fontSize: "24px",
                    fontWeight: "400",
                    lineHeight: "130%",
                    textTransform: "capitalize",
                  }}
                >
                  {index + 1}. {point.title}
                </strong>
                <p
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
            src={IMAGES.whoWeAre}
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
  );
};

export default WhoWeAre;

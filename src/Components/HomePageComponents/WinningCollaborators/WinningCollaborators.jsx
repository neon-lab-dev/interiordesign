import Marquee from "react-fast-marquee";
import { ICONS, IMAGES } from "../../../assets/Assets";
import SectionHeading from "../../Reusable/SectionHeading/SectionHeading";

const WinningCollaborators = () => {
    const collaboratorsLogos = [IMAGES.blackRocks, IMAGES.clearWater,IMAGES.cevnt,IMAGES.berkdia, IMAGES.baker];

    return (
        <section
            className="container-fluid"
            style={{ backgroundColor: "#181818", padding: "89px 80px 85px 80px" }}
        >
            <SectionHeading
                subHeading="Our beloved clients"
                heading="Winning collaborations"
                subHeadingStyle="text-start"
                headingStyle="text-start"
            />

            {/* Logos */}
            <Marquee style={{ marginTop: "44px" }}>
  {collaboratorsLogos.map((logo, index) => (
    <img
      key={index}
      src={logo}
      alt={`logo-${index + 1}`}
      style={{
        width: "200px",
        marginRight: "60px",
        display: "inline-block",
        filter: "invert(31%) sepia(5%) saturate(0%) hue-rotate(0deg) brightness(85%) contrast(95%)",
      }}
    />
  ))}
</Marquee>


        </section>
    );
};

export default WinningCollaborators;

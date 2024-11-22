import Marquee from "react-fast-marquee";
import { IMAGES } from "../../../assets/Assets";
import SectionHeading from "../../Reusable/SectionHeading/SectionHeading";

const WinningCollaborators = () => {
    const collaboratorsLogos = [IMAGES.logo1, IMAGES.logo1, IMAGES.logo1, IMAGES.logo1];

    return (
        <div
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
                        style={{ width: "200px", marginRight: "60px", display: "inline-block" }}
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default WinningCollaborators;

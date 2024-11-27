import "./OurService.css"
import { IMAGES } from "../../../assets/Assets";
import SectionHeading from "../../Reusable/SectionHeading/SectionHeading";

const OurServices = () => {
    // Services
    const services = [
        { title: "Interior Design", imgSrc: IMAGES.interiorDesign },
        { title: "Turnkey Projects", imgSrc: IMAGES.turnkeyProjects },
        { title: "Civil Works", imgSrc: IMAGES.civil },
        { title: "Modular Furniture", imgSrc: IMAGES.modularFurniture },
        { title: "Loose Furniture", imgSrc: IMAGES.looseFurniture },
        { title: "Office Furniture", imgSrc: IMAGES.officeFurniture },
    ];

    return (
        <div
            className="container-fluid d-flex justify-content-center"
            style={{
                backgroundColor: "#1C1C1C",
                padding: "40px 0 80px 0",
            }}
        >
            <div style={{ width: "784px" }}>
                <SectionHeading
                    subHeading="Services"
                    heading="Our Range of Services"
                    subHeadingStyle="text-center"
                    headingStyle="text-center"
                />

                <div className="row mt-5">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center"
                        >
                            <div className="position-relative" style={{ width: "240px", height: "240px" }}>
                                {/* Image */}
                                <img
                                    src={service.imgSrc}
                                    alt={service.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "12px",
                                        objectFit: "cover",
                                    }}
                                />
                                <div
                                    className="position-absolute top-0 left-0 w-100 h-100"
                                    style={{
                                        background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 29.79%, #000 112.5%)",
                                        borderRadius: "12px",
                                    }}
                                ></div>
                                {/* title */}
                                <h1
                                    className="title position-absolute bottom-0 start-50 translate-middle-x text-center"
                                >
                                    {service.title}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="btnContainer d-flex justify-content-center">
                    <button className="">
                        Great Free Quote
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurServices;

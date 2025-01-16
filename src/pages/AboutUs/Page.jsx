import React from "react";
import SectionHeading from "../../Components/Reusable/SectionHeading/SectionHeading";

const Page = () => {
  return (
    <div>
      <div>
        <div className="container-fluid mt-2 p-0">
          {/* Aim Section */}
          <section
            className=" py-5"
            style={{
              backgroundColor: "#181818",
            }}
          >
            <SectionHeading
              heading="Our Aim"
              subHeadingStyle="text-start"
              headingStyle="text-start"
            />
            <p>
              Our company aims to offer contemporary and unique solutions for
              interior spaces. We offer complete interior design and execution
              services/solutions.
            </p>
          </section>

          {/* About Us Section */}
          <section className=" py-5">
            <SectionHeading
              heading="About Us"
              subHeadingStyle="text-start"
              headingStyle="text-start"
            />
            <p>
              At Spaceframe, we believe that great design is more than
              aesthetics—it’s about creating spaces that reflect the essence of
              the people who inhabit them. Our approach combines meticulous
              space planning with a deep understanding of materials to craft
              interiors that are both functional and timeless.
            </p>
            <p>
              Founded by Ar. Lakshay Arora, Spaceframe is built on the belief
              that well-designed spaces can enhance everyday experiences. With
              an eye for detail and a commitment to sustainability, we focus on
              using durable, high-quality materials that ensure our designs
              stand the test of time. Whether it’s a residential, commercial, or
              hospitality project, we collaborate closely with clients to bring
              their vision to life, tailoring every project to their unique
              needs.
            </p>
            <p>
              At Spaceframe, we prioritize innovation, personalization, and
              craftsmanship, delivering solutions that blend style and
              practicality. Our mission is to create spaces that inspire,
              nurture, and endure.
            </p>
          </section>

          {/* Mission Section */}
          <section
            className=" py-5"
            style={{
              backgroundColor: "#181818",
            }}
          >
            <SectionHeading
              heading="Our Mission"
              subHeadingStyle="text-start"
              headingStyle="text-start"
            />
            <p>
              At Spaceframe, our mission is to create thoughtful, timeless
              interiors that inspire and elevate the human experience. We blend
              innovative design with sustainable materials to craft functional,
              beautiful spaces that stand the test of time. Our commitment is to
              deliver personalized, enduring solutions that reflect the unique
              identity and needs of every client.
            </p>
          </section>

          {/* Serviceable Areas Section */}
          <section className=" py-5">
            <SectionHeading
              heading="Serviceable Areas"
              subHeadingStyle="text-start"
              headingStyle="text-start"
            />

            <p>
              At Spaceframe, we are proud to offer our interior design services
              across key regions, including Gurgaon, Delhi, Noida, Faridabad,
              and Ghaziabad. Whether you're looking to transform a residential,
              commercial, or hospitality space, our team is here to bring your
              vision to life with precision and creativity.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;

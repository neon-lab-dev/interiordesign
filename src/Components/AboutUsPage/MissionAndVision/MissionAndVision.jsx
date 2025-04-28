import { IMAGES } from "../../../assets/Assets";
import "./MissionAndVision.css"

const MissionAndVision = () => {
    return (
        <section className="mission-vision-section">
      <div className="container">
        {/* Heading Text */}
        <div className="section-text-content">
            <p className="tagline">CRAFTER TO COMFORT. BUILT TO ENDURE</p>
            <h2 className="heading">Spaces That Inspire, Nurture, Endure</h2>
            <p className="description">
            Our mission is to create environments that elevate everyday experiences. We prioritize innovation, personalization, and durability—blending high-quality materials with a deep understanding of space and function.
            </p>
          </div>

        {/* Content Grid */}
        <div className="mission-content-grid">
          {/* Left Column: Text */}
          <div className="mission-text-content">
            <div className="mission-story-block">
              <h3 className="mission-section-heading">Our Story</h3>
              <p className="mission-description">
                Founded by Ar. Lakshay Arora, Spaceframe was built on the belief that good design can transform lives. With an eye for detail and a deep commitment to sustainable practices, we partner with our clients to create spaces that are meaningful and memorable.
              </p>
            </div>
            <div className="mission-mission-block">
              <h3 className="mission-section-heading">Our Mission</h3>
              <p className="mission-description">
                At Spaceframe, our mission is to create thoughtful, timeless interiors that inspire and elevate the human experience. We blend innovative design with sustainable materials to craft functional, beautiful spaces that stand the test of time. Our commitment is to deliver personalized, enduring solutions that reflect the unique identity and needs of every client.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="mission-image-content">
            <img
              src={IMAGES.contact}
              alt="Modern white kitchen with central island, marble backsplash, and pendant lights"
              className="mission-content-image"
            />
          </div>
        </div>
      </div>
    </section>
    );
};

export default MissionAndVision;
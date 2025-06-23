import { IMAGES } from "../../../assets/Assets";
import "./MissionAndVision.css";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const MissionAndVision = () => {
    return (
        <motion.section
            className="mission-vision-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
      <div className="container">
        {/* Heading Text */}
        <motion.div
            className="section-text-content"
            variants={containerVariants}
        >
            <motion.p className="tagline" variants={itemVariants}>
                CRAFTER TO COMFORT. BUILT TO ENDURE
            </motion.p>
            <motion.h2 className="heading" variants={itemVariants}>
                Spaces That Inspire, Nurture, Endure
            </motion.h2>
            <motion.p className="description" variants={itemVariants}>
                Our mission is to create environments that elevate everyday experiences. We prioritize innovation, personalization, and durability—blending high-quality materials with a deep understanding of space and function.
            </motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
            className="mission-content-grid"
            variants={containerVariants}
        >
          {/* Left Column: Text */}
          <motion.div
            className="mission-text-content"
            variants={containerVariants}
          >
            <motion.div className="mission-story-block" variants={itemVariants}>
              <h3 className="mission-section-heading">Our Story</h3>
              <p className="mission-description">
                Founded by Ar. Lakshay Arora, Spaceframe was built on the belief that good design can transform lives. With an eye for detail and a deep commitment to sustainable practices, we partner with our clients to create spaces that are meaningful and memorable.
              </p>
            </motion.div>
            <motion.div className="mission-mission-block" variants={itemVariants}>
              <h3 className="mission-section-heading">Our Mission</h3>
              <p className="mission-description">
                At Spaceframe, our mission is to create thoughtful, timeless interiors that inspire and elevate the human experience. We blend innovative design with sustainable materials to craft functional, beautiful spaces that stand the test of time. Our commitment is to deliver personalized, enduring solutions that reflect the unique identity and needs of every client.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div className="mission-image-content" variants={itemVariants}>
            <img
              src={IMAGES.contact}
              alt="Modern white kitchen with central island, marble backsplash, and pendant lights"
              className="mission-content-image"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
    );
};

export default MissionAndVision;
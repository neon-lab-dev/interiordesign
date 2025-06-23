import "./InnovationAndPersonalization.css";
import { IMAGES } from "../../../assets/Assets";
import { motion } from "framer-motion";

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
      ease: "easeOut",
    },
  },
};

const InnovationAndPersonalization = () => {
  return (
    <motion.section
      className="innovation-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        {/* Text Content */}
        <motion.div
          className="section-text-content"
          variants={containerVariants}
        >
          <motion.p className="tagline" variants={itemVariants}>
            TAILORED SPACES, TIMELESS IMPACT
          </motion.p>
          <motion.h2 className="heading" variants={itemVariants}>
            Rooted In Innovation & Personalization
          </motion.h2>
          <motion.p className="description" variants={itemVariants}>
            At Spaceframe, we design spaces that reflect the people who live and
            work in them. Founded by <strong>Ar. Lakshay Arora</strong>, our
            work blends thoughtful planning, sustainable materials, and
            personalized design to create spaces that are as functional as they
            are beautiful.
          </motion.p>
        </motion.div>

        {/* Details Grid (Images + Stats) */}
        <motion.div
          className="innovation-details-grid"
          variants={containerVariants}
        >
          {/* Image 1 */}
          <motion.div className="detail-image-wrapper" variants={itemVariants}>
            <img
              src={IMAGES.explore3}
              alt="Minimalist desk setup with mirror"
              className="detail-image"
            />
          </motion.div>

          {/* Image 2 */}
          <motion.div className="detail-image-wrapper" variants={itemVariants}>
            <img
              src={IMAGES.turnkeyProjects}
              alt="Modern interior design project"
              className="detail-image"
            />
          </motion.div>

          {/* Stats Column */}
          <motion.div className="innovation-stats" variants={containerVariants}>
            <motion.div className="stat-item" variants={itemVariants}>
              <span className="stat-value">480 BILLION</span>
              <span className="stat-label">Global Furniture Market Size</span>
            </motion.div>
            <motion.div
              className="stat-item stat-item--secondary"
              variants={itemVariants}
            >
              <span className="stat-value">26.1 %</span>
              <span className="stat-label">
                E-commerce Penetration in Furniture Sales
              </span>
            </motion.div>
            <motion.div
              className="stat-item stat-item--tertiary"
              variants={itemVariants}
            >
              <span className="stat-value">2027</span>
              <span className="stat-label">
                Rise of Rental and Subscription Models
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InnovationAndPersonalization;

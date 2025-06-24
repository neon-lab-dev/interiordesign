import { IMAGES } from "../../../assets/Assets";
import "./QualityAssurance.css";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
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

const QualityAssurance = () => {
    return (
        <motion.section
            className="quality-assurance-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
      <div className="container">
        <div className="quality-grid">
          {/* Left Column: Text Content */}
          <motion.div
            className="quality-text-content"
          >
            <motion.p className="tagline" variants={itemVariants}>
                QUALITY ASSURANCE
            </motion.p>
            <motion.h2 className="quality-heading" variants={itemVariants}>
                Design That Meets Exacting Standards
            </motion.h2>
            <motion.div className="description">
              <motion.p variants={itemVariants}>
                Our interior spaces are designed to meet high expectations—with durable materials, expert advice, and complete satisfaction guaranteed.
              </motion.p>
              <motion.p variants={itemVariants}>
                With every project, we aim to deliver excellence and comfort that lasts.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div className="quality-image-content" variants={itemVariants}>
            <img
              src={IMAGES.aboutUsGroup}
              alt="Interior design showcasing quality materials and comfort"
              className="quality-image"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
    );
};

export default QualityAssurance;
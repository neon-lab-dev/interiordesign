/* eslint-disable react/no-unescaped-entities */
import "./ServiceArea.css";
import { IMAGES } from "../../../assets/Assets";
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

const slideUpItemVariants = {
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

const slideLeftItemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const slideRightItemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };


const ServiceArea = () => {
    const locations = ['Gurgaon', 'Delhi', 'Noida', 'Faridabad', 'Ghaziabad'];
    return (
        <motion.section
            className="service-area-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
      <div className="container">
        {/* Header Text */}
        <motion.div
            className="section-text-content"
            variants={containerVariants}
        >
            <motion.p className="tagline" variants={slideUpItemVariants}>
                SERVICEABLE AREAS
            </motion.p>
            <motion.h2 className="heading" variants={slideUpItemVariants}>
                Where We Work
            </motion.h2>
            <motion.p className="description" variants={slideUpItemVariants}>
                We proudly offer our interior design services across the following regions:
            </motion.p>
        </motion.div>

        {/* Location Pills */}
        <motion.div
            className="service-locations"
            variants={containerVariants}
        >
          {locations.map((location) => (
            <motion.span
              key={location}
              className="location-pill"
              variants={slideLeftItemVariants}
            >
              {location}
            </motion.span>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
            className="service-content-grid"
            variants={containerVariants}
        >
          {/* Left Column: Text & Stat */}
          <motion.div
            className="service-text-content"
            variants={containerVariants}
          >
            <motion.h3 className="service-text-heading" variants={slideLeftItemVariants}>
                ENVISIONING UPGRADE
            </motion.h3>
            <motion.p className="service-text-description" variants={slideLeftItemVariants}>
              Looking to transform your residential, commercial, or hospitality space? We're here to bring your vision to life with unmatched precision and creativity.
            </motion.p>
            <motion.div className="service-stat" variants={slideLeftItemVariants}>
              <span className="stat-percentage">74%</span>
              <p className="stat-description">
                of consumers worldwide are willing to pay more for sustainable products
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Map Image */}
          <motion.div
            className="service-map-content"
            variants={slideRightItemVariants}
          >
            <img
              src={IMAGES.map}
              alt="Map showing service area location"
              className="service-map-image"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
    );
};

export default ServiceArea;
import "./AboutUsHero.css";
import { IMAGES } from "../../../assets/Assets";
import { motion } from 'framer-motion';
const AboutUsHero = () => {
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
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageSlideInVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };
  return (
    <div className="aboutus-hero-container">
      <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{ overflow: 'hidden' }}
    >
      <motion.h1
        className="about-us-heading"
        variants={itemVariants}
      >
        ABOUT US
      </motion.h1>
      <motion.p
        className="aboutus-hero-description"
        variants={itemVariants}
      >
        Our company aims to offer contemporary and unique solutions for
        interior spaces. We offer complete interior design and execution
        services/ solutions.
      </motion.p>
    </motion.div>

     <div className="image-container">
        {/* Moving logo */}
      <div className="logo-wrapper">
        <div className="rotating-text">
          <span>E</span>
          <span>C</span>
          <span>A</span>
          <span>P</span>
          <span>S</span>
          <span> </span>
          <span>F</span>
          <span>R</span>
          <span>A</span>
          <span>M</span>
          <span>E</span>
        </div>
        <div className="logo-center">
          <div className="star" />
        </div>
      </div>

      <motion.img
      src={IMAGES.aboutUs1}
      alt="Contemporary interior space showcasing our design work"
      className="aboutus-hero-img"
      variants={imageSlideInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    />
     </div>
    </div>
  );
};

export default AboutUsHero;

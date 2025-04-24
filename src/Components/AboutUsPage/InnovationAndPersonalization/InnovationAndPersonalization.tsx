import React from 'react';
import "./InnovationAndPersonalization.css"
import { IMAGES } from '../../../assets/Assets';

const InnovationAndPersonalization = () => {
    return (
        <section className="innovation-section">
        <div className="container">
          {/* Text Content */}
          <div className="innovation-text-content">
            <p className="tagline">TAILORED SPACES, TIMELESS IMPACT</p>
            <h2 className="heading">Rooted In Innovation & Personalization</h2>
            <p className="description">
              At Spaceframe, we design spaces that reflect the people who live and work in them. Founded by <strong>Ar. Lakshay Arora</strong>, our work blends thoughtful planning, sustainable materials, and personalized design to create spaces that are as functional as they are beautiful.
            </p>
          </div>
  
          {/* Details Grid (Images + Stats) */}
          <div className="innovation-details-grid">
            {/* Image 1 */}
            <div className="detail-image-wrapper">
              <img src={IMAGES.explore3} alt="Minimalist desk setup with mirror" className="detail-image" />
            </div>
  
            {/* Image 2 */}
            <div className="detail-image-wrapper">
              <img src={IMAGES.turnkeyProjects} alt="" className="detail-image" />
            </div>
  
            {/* Stats Column */}
            <div className="innovation-stats">
              <div className="stat-item">
                <span className="stat-value">480 BILLION</span>
                <span className="stat-label">Global Furniture Market Size</span>
              </div>
              <div className="stat-item stat-item--secondary"> {/* Added modifier for potential color difference */}
                <span className="stat-value">26.1 %</span>
                <span className="stat-label">E-commerce Penetration in Furniture Sales</span>
              </div>
              <div className="stat-item stat-item--tertiary"> {/* Added modifier for potential color difference */}
                <span className="stat-value">2027</span>
                <span className="stat-label">Rise of Rental and Subscription Models</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default InnovationAndPersonalization;
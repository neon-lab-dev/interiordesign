/* eslint-disable react/no-unescaped-entities */
import "./ServiceArea.css"
import { IMAGES } from "../../../assets/Assets";

const ServiceArea = () => {
    const locations = ['Gurgaon', 'Delhi', 'Noida', 'Faridabad', 'Ghaziabad'];
    return (
        <section className="service-area-section">
      <div className="container">
        {/* Header Text */}
        <div className="section-text-content">
            <p className="tagline">SERVICEABLE AREAS</p>
            <h2 className="heading">Where We Work</h2>
            <p className="description">
            We proudly offer our interior design services across the following regions:
            </p>
          </div>

        {/* Location Pills */}
        <div className="service-locations">
          {locations.map((location) => (
            <span key={location} className="location-pill">
              {location}
            </span>
          ))}
        </div>

        {/* Content Grid */}
        <div className="service-content-grid">
          {/* Left Column: Text & Stat */}
          <div className="service-text-content">
            <h3 className="service-text-heading">ENVISIONING UPGRADE</h3>
            <p className="service-text-description">
              Looking to transform your residential, commercial, or hospitality space? We're here to bring your vision to life with unmatched precision and creativity.
            </p>
            <div className="service-stat">
              <span className="stat-percentage">74%</span>
              <p className="stat-description">
                of consumers worldwide are willing to pay more for sustainable products
              </p>
            </div>
          </div>

          {/* Right Column: Map Image */}
          <div className="service-map-content">
            <img
              src={IMAGES.map}
              alt="Map showing service area location"
              className="service-map-image"
            />
          </div>
        </div>
      </div>
    </section>
    );
};

export default ServiceArea;
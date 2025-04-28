import { IMAGES } from "../../../assets/Assets";
import "./QualityAssurance.css"
const QualityAssurance = () => {
    return (
        <section className="quality-assurance-section">
      <div className="container">
        <div className="quality-grid">
          {/* Left Column: Text Content */}
          <div className="quality-text-content">
            <p className="tagline">QUALITY ASSURANCE</p>
            <h2 className="quality-heading">Design That Meets Exacting Standards</h2>
            <div className="description">
              <p>
                Our interior spaces are designed to meet high expectations—with durable materials, expert advice, and complete satisfaction guaranteed.
              </p>
              <p>
                With every project, we aim to deliver excellence and comfort that lasts.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="quality-image-content">
            <img
              src={IMAGES.aboutUs1}
              alt="Interior design showcasing quality materials and comfort"
              className="quality-image"
            />
          </div>
        </div>
      </div>
    </section>
    );
};

export default QualityAssurance;
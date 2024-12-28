import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ProductImages.css";

const ProductImages = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0]?.url || "");
  const [zoomStyle, setZoomStyle] = useState({ display: "none" });

  // Handle image click to update main image
  const handleImageClick = (url) => {
    setMainImage(url);
  };

  // Handle mouse movement to update zoom effect
  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    const xPercent = (offsetX / offsetWidth) * 100;
    const yPercent = (offsetY / offsetHeight) * 100;

    setZoomStyle({
      display: "block",
      backgroundImage: `url(${mainImage})`,
      backgroundSize: "200%", // Adjust zoom level here
      backgroundPosition: `${xPercent}% ${yPercent}%`,
    });
  };

  // Handle mouse leave to hide zoom
  const handleMouseLeave = () => {
    setZoomStyle({ display: "none" });
  };

  return (
    <div className="product-image-container d-flex justify-content-between h-100 w-50">
      {/* Left Column for Thumbnails */}
      <div className="product-image-thumbnails d-flex flex-column gap-3 d-md-flex d-none">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="product-image-thumbnail"
            onClick={() => handleImageClick(img.url)}
          >
            <img
              src={img.url}
              alt={`Product image ${idx + 1}`}
              className="w-100 rounded-3"
            />
          </div>
        ))}
      </div>

      {/* Right Column for Main Image */}
      <div
        className="product-main-image"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {mainImage && (
          <img
            src={mainImage}
            alt="Main Product"
            className="w-100 h-100 rounded-3"
          />
        )}
        <div className="product-zoom" style={zoomStyle}></div>
      </div>
    </div>
  );
};

ProductImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ),
};

export default ProductImages;

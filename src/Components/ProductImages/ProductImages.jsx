import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./ProductImages.css";

const ProductImages = ({ images = [] }) => {
  const [mainImage, setMainImage] = useState(images[0]?.url || "");

  // Handle image click to update main image
  const handleImageClick = (url) => {
    setMainImage(url);
  };

  return (
    <div className="product-image-container d-flex justify-content-between h-100">
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
      <div className="product-main-image">
        {mainImage && (
          <img
            src={mainImage}
            alt="Main Product"
            className="w-100 h-100 rounded-3"
          />
        )}
      </div>
    </div>
  );
};

ProductImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired
    })
  )
};

export default ProductImages;

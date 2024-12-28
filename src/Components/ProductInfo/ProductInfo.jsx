import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductInfo.css";
import { useNavigate } from "react-router-dom";
import { use } from "react";

const ProductInfo = ({ product }) => {
  const {
    name,
    sizes = [],
    basePrice,
    discountedPercent,
    _id,
    images = [],
  } = product || {};
  const navigate = useNavigate();

  const calculatePrice = (basePrice, discountedPercent) => {
    return basePrice - (basePrice * discountedPercent) / 100;
  };

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleInquireNow = () => {
    navigate("/contact");
  };

  const handleBuyNow = () => {
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const isProductExist = cartProducts.find(
      (product) => product.productId === _id
    );

    if (isProductExist) {
      toast.error("Product already exists in the cart!");
    } else {
      cartProducts.push({
        productId: _id,
        name: name,
        size: selectedSize?.size || "Default",
        basePrice: selectedSize?.basePrice || 0,
        discountedPercent: selectedSize?.discountedPercent || 0,
        image: images[0]?.url || "",
        quantity: quantity,
      });
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
      window.location.href = "/cart";
    }
  };

  const handleQuantityChange = (type) => {
    if (type === "decrement" && quantity <= 1) {
      toast.error("Quantity cannot be less than 1!");
      return; // Exit the function to prevent decrement
    }
    // Update quantity for increment or valid decrement
    setQuantity((prev) => (type === "increment" ? prev + 1 : prev - 1));
  };

  const handleAddToCart = () => {
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const isProductExist = cartProducts.find(
      (product) => product.productId === _id
    );

    if (isProductExist) {
      toast.error("Product already exists in the cart!");
    } else {
      cartProducts.push({
        productId: _id,
        name: name,
        size: selectedSize?.size || "Default",
        basePrice: selectedSize?.basePrice || 0,
        discountedPercent: selectedSize?.discountedPercent || 0,
        image: images[0]?.url || "",
        quantity: quantity,
      });
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
      toast.success("Product added to cart successfully!");
    }
  };

  return (
    <div className="d-flex flex-column product-info">
      {/* Product Details */}
      <div className="product-name">{name || "Product Name"}</div>
      <div className="d-flex align-items-center gap-3">
        <span className="product-price">
          ₹
          {calculatePrice(
            selectedSize?.basePrice,
            selectedSize?.discountedPercent
          )}
        </span>
        <span className="product-muted">₹{selectedSize?.basePrice}</span>
        <span className="discount">
          {selectedSize?.discountedPercent || 0}% off
        </span>
      </div>

      {/* Sizes Section */}
      <div className="d-flex flex-column sizeDiv">
        <span className="product-sub-title">Size</span>
        <div className="d-flex align-items-center gap-2 size-btn">
          {sizes.length > 0 ? (
            sizes.map((item, index) => (
              <button
                key={index}
                className={`btn btn-black ${
                  selectedSize === item ? "active" : ""
                }`}
                onClick={() => handleSizeClick(item)}
              >
                {item.size}
              </button>
            ))
          ) : (
            <span>No sizes available</span>
          )}
        </div>
      </div>

      {/* Quantity Section */}
      <div className="d-flex align-items-center gap-5">
        <div className="d-flex flex-column quantityDiv">
          <div className="product-sub-title">Quantity</div>
          <div className="d-flex gap-4 align-items-center flex-wrap">
            <div className="d-flex items-center gap-1">
              <button
                className="btn btn-black active"
                style={{ minWidth: "40px" }}
                onClick={() => handleQuantityChange("decrement")}
              >
                -
              </button>
              <button
                className="h-100 border bg-transparent d-flex align-items-center justify-content-center text-center"
                style={{ minWidth: "40px", minHeight: "100%" }}
                onClick={(e) => e.preventDefault}
              >
                {quantity}
              </button>
              <button
                className="btn btn-black active"
                style={{ minWidth: "40px" }}
                onClick={() => handleQuantityChange("increment")}
              >
                +
              </button>
            </div>
            <div className="colorsDiv product-colors d-flex align-items-center h-100 gap-2">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="d-flex flex-column gap-3 w-100 product-info-btn">
        <button
          className="btn btn-lg-colored py-2"
          onClick={() => handleBuyNow()}
        >
          Buy Now
        </button>
        <button className="btn btn-primary" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="btn btn-primary" onClick={handleInquireNow}>
          Inquire Now
        </button>
      </div>
    </div>
  );
};
ProductInfo.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    sizes: PropTypes.arrayOf(
      PropTypes.shape({
        size: PropTypes.string,
        basePrice: PropTypes.number,
        discountedPercent: PropTypes.number,
      })
    ),
    basePrice: PropTypes.number,
    discountedPercent: PropTypes.number,
    _id: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      })
    ),
    productId: PropTypes.string,
  }).isRequired,
};

export default ProductInfo;

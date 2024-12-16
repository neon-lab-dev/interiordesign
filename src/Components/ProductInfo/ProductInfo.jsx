import React, { useState } from "react";
import Toast from "../Utilities/Toast";
import "./ProductInfo.css";

const ProductInfo = ({ product }) => {
  const {
    name,
    sizes = [],
    basePrice,
    discountedPercent,
    _id,
    images = [],
  } = product || {};

  const calculatePrice = (basePrice, discountedPercent) => {
    return basePrice - (basePrice * discountedPercent) / 100;
  };

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [toast, setToast] = useState({
    show: false,
    type: "info",
    message: "",
  });

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (type) => {
    if (type === "decrement" && quantity <= 1) {
      // Show error toast
      setToast({
        show: true,
        type: "error",
        message: "Quantity cannot be less than 1!",
      });

      // Automatically hide the toast after a timeout
      setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 3000);
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
      setToast({
        show: true,
        type: "error",
        message: "Product already exists in the cart!",
      });
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
      setToast({
        show: true,
        type: "success",
        message: "Product added to cart successfully!",
      });
    }
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };

  return (
    <div className="d-flex flex-column product-info">
      {/* Toast Component */}
      <Toast
        type={toast.type}
        message={toast.message}
        show={toast.show}
        onClose={closeToast}
      />

      {/* Product Details */}
      <div className="product-name">{name || "Product Name"}</div>
      <div className="d-flex align-items-center gap-3">
        <span className="product-price">
          ₹{calculatePrice(selectedSize?.basePrice, selectedSize?.discountedPercent)}
        </span>
        <span className="product-muted">₹{selectedSize?.basePrice}</span>
        <span className="discount">{selectedSize?.discountedPercent || 0}% off</span>
      </div>

      {/* Sizes Section */}
      <div className="d-flex flex-column gap-2 sizeDiv">
        <span className="product-sub-title">Size</span>
        <div className="d-flex align-items-center gap-2 size-btn">
          {sizes.length > 0 ? (
            sizes.map((item, index) => (
              <button
                key={index}
                className={`btn btn-black ${selectedSize === item ? "active" : ""}`}
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
      <div className="d-flex align-items-center gap-5 borderDiv">
        <div className="d-flex flex-column quantityDiv">
          <div className="product-sub-title">Quantity</div>
          <div className="d-flex items-center gap-2 quantity">
            <span onClick={() => handleQuantityChange("decrement")}>-</span>
            <span>{quantity}</span>
            <span onClick={() => handleQuantityChange("increment")}>+</span>
          </div>
        </div>
        <div className="colorsDiv product-colors d-flex gap-2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="d-flex flex-column gap-3 w-100 product-info-btn">
        <button className="btn btn-lg-colored py-2">Buy Now</button>
        <button className="btn btn-base-transparent" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;

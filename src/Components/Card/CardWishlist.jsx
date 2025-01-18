import React from "react";
import { IMAGES, ICONS } from "@/assets/Assets";
import { useNavigate } from "react-router-dom";

const CardWishlist = ({ product, onRemove }) => {
  const { name, image, size, productId,basePrice, discountedPercent, color } = product;
  const discountedPrice = (
    basePrice - (basePrice * discountedPercent) / 100
  ).toFixed(2);

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${productId}`);
  };

  // Add product to cart
  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const isProductInCart = cartProducts.some((item) => item.productId === productId);

    if (isProductInCart) {
      alert("Product is already in the cart.");
    } else {
      cartProducts.push({
        productId,
        name,
        size,
        color,
        basePrice,
        discountedPercent,
        image,
        quantity: 1, 
      });
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
      alert("Product added to cart.");
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      wishlist = wishlist.filter((item) => item.productId !== productId);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      
      // Trigger UI update by calling the `onRemove` callback
      onRemove(productId);
    }
  };

  return (
    <div className="card rounded-3 overflow-hidden" onClick={handleCardClick}>
      <div className="card-image position-relative">
        <img src={image} alt={name} />
      </div>
      <div className="card-body">
        <div className="card-content">
          <img src={IMAGES.cardOverlay} alt="" className="card-overlay z-n1" />
          <h3 className="card-title z-2">{name}</h3>
          <div className="price-details d-flex align-items-center gap-1 z-2">
            <span className="price">₹{discountedPrice}</span>
            <span className="text-muted">₹{basePrice}</span>
            <span className="badge">{discountedPercent}% OFF</span>
          </div>
        </div>
        <div className="actions d-flex align-items-center gap-2 z-1">
          <button
            className="btn btn-secondary"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(productId);
            }}
          >
            <img src={ICONS.TrashBin} alt="Remove" />
            <span>Remove</span>
          </button>
          <button
            className="btn btn-tertiary"
            onClick={handleAddToCart}
          >
            <img src={ICONS.cartIconGrey} alt="Add to Cart" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardWishlist;

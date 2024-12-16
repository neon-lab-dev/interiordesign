// import React from "react";
// import { IMAGES, ICONS } from "@/assets/Assets";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

// const Card = ({ product }) => {
//   const { name, images, sizes, color,id } = product;


//   const { size, basePrice, discountedPercent, stock } = sizes[0] || {};
//   const discountedPrice = (
//     basePrice -
//     (basePrice * discountedPercent) / 100
//   ).toFixed(2);
//   const navigate = useNavigate();
//   const handleCardClick = () => {

//   };

//   return (
//     <div
//       className="card rounded-3 overflow-hidden"
//       onClick={handleCardClick}
//       style={{ cursor: "pointer" }}
//     >
//       <div className="card-image position-relative">
//         <img src={images[0]?.url} alt={name} />
//         <div className="d-flex align-items-center justify-content-between card-badges w-100">
//           <div className="card-badge">{`Stock: ${stock || "N/A"}`}</div>
//           <div className="card-badge">
//             <img src={ICONS.heartWhite} alt="Favorite" />
//           </div>
//         </div>
//       </div>
//       <div className="card-body">
//         <div className="card-content">
//           <img src={IMAGES.cardOverlay} alt="" className="card-overlay z-n1" />
//           <div className="card-title z-2">{name}</div>
//           <div className="d-flex align-items-center gap-1 z-2">
//             <span className="price">₹ {discountedPrice}</span>
//             <span className="text-muted">₹ {basePrice}</span>
//             <span className="badge">{discountedPercent}% OFF</span>
//           </div>
//         </div>
//         <div className="d-flex align-items-center gap-2 z-1">
//           <button className="btn btn-secondary">
//             <img src={ICONS.share} alt="Share" />
//             <span>Inquire Now</span>
//           </button>
//           <button className="btn btn-tertiary">
//             <img src={ICONS.cartIconGrey} alt="Add to Cart" />
//             <span>Add to Cart</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;


import React from "react";
import { IMAGES, ICONS } from "@/assets/Assets";
import { useNavigate } from "react-router-dom";

const Card = ({ product = {}, onWishlistUpdate }) => {
  const { name, images = [], sizes = [], _id } = product;
  const { size, basePrice, discountedPercent, stock } = sizes[0] || {};
  const discountedPrice = (
    basePrice - (basePrice * discountedPercent) / 100
  ).toFixed(2);

  const navigate = useNavigate();

  // Navigate to product details
  const handleCardClick = () => {
    navigate(`/product/${_id}`);
  };

  // Add product to wishlist
  const handleAddToWishlist = (e) => {
    e.stopPropagation(); // Prevent card click event
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isProductInWishlist = wishlist.some((item) => item.productId === _id);

    if (isProductInWishlist) {
      alert("Product is already in your wishlist.");
    } else {
      wishlist.push({ productId: _id, name, size, image: images[0]?.url, basePrice, discountedPercent });
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      alert("Product added to wishlist.");
      if (onWishlistUpdate) onWishlistUpdate(); // Notify Wishlist component
    }
  };

  return (
    <div
      className="card rounded-3 overflow-hidden"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <div className="card-image position-relative">
        <img src={images[0]?.url} alt={name} style={{ objectFit: "cover" }} />
        <div className="d-flex align-items-center justify-content-between card-badges w-100">
          <div className="card-badge" onClick={handleAddToWishlist}>
            <img src={ICONS.heartWhite} alt="Favorite" />
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="card-content">
          <img src={IMAGES.cardOverlay} alt="" className="card-overlay z-n1" />
          <div className="card-title z-2">{name}</div>
          <div className="d-flex align-items-center gap-1 z-2">
            <span className="price">₹ {discountedPrice}</span>
            <span className="text-muted">₹ {basePrice}</span>
            <span className="badge">{discountedPercent}% OFF</span>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2 z-1">
          <button className="btn btn-secondary">
            <img src={ICONS.share} alt="Share" />
            <span>Inquire Now</span>
          </button>
          <button className="btn btn-tertiary" onClick={(e) => {
            e.stopPropagation();
            // Handle adding to cart
          }}>
            <img src={ICONS.cartIconGrey} alt="Add to Cart" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
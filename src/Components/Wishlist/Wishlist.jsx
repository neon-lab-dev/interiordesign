// import BestSellers from "../BestSellers/BestSellers"
// import Card from "../Card/Card"
// import "./Wishlist.css"

// const Wishlist = () => {
//     return (
//         <div className="w-100 d-flex items-center flex-column justify-center ">
//             <section className="w-100 d-flex items-center flex-column justify-content-center py-0 pt-5">
//                 <div className="home-sections-header d-flex align-items-center justify-content-start">
//                     <h2>Your Wishlist -: 2 Items</h2>
//                 </div>
//                 <div className="wishlist-grid">
                    
//                 </div>
//             </section>
//             <BestSellers />
//         </div>
//     )
// }

// export default Wishlist


import React, { useEffect, useState } from "react";
import BestSellers from "../BestSellers/BestSellers";
import Card from "../Card/Card";
import "./Wishlist.css";
import CardWishlist from "../Card/CardWishlist";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Fetch wishlist items from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const handleRemoveFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter((item) => item.productId !== productId);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="w-100 d-flex items-center flex-column justify-center">
      <section className="w-100 d-flex items-center flex-column justify-content-center py-0 pt-5">
        <div className="home-sections-header d-flex align-items-center justify-content-start">
          <h2>Your Wishlist -: {wishlistItems.length} Item(s)</h2>
        </div>
        <div className="wishlist-grid">
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item) => (
              <CardWishlist
                key={item.productId}
                product={item}
                onRemove={handleRemoveFromWishlist}
              />
            ))
          ) : (
            <p>Your wishlist is empty!</p>
          )}
        </div>
      </section>
      <BestSellers />
    </div>
  );
};

export default Wishlist;

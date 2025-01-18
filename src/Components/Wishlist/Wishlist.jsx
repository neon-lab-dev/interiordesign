import { useEffect, useState } from "react";
import BestSellers from "../BestSellers/BestSellers";
import "./Wishlist.css";
import CardWishlist from "../Card/CardWishlist";
import { toast } from "react-toastify";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Fetch wishlist items from localStorage
  const fetchWishlist = () => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  };

  useEffect(() => {
    fetchWishlist();

    // Listen for wishlist updates
    const handleWishlistUpdate = () => {
      fetchWishlist();
    };

    window.addEventListener("wishlistUpdate", handleWishlistUpdate);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("wishlistUpdate", handleWishlistUpdate);
    };
  }, []);

  const handleRemoveFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter((item) => item.productId !== productId);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    // Dispatch custom event to update wishlist count
    const event = new Event("wishlistUpdate");
    window.dispatchEvent(event);

    // toast
    toast.success("Product removed from wishlist!");
  };

  return (
    <div className="w-100 d-flex items-center flex-column justify-center">
      <section className="w-100 d-flex items-center flex-column justify-content-center py-0 pt-5">
        <div className="home-sections-header d-flex align-items-center justify-content-start">
          <h2>Your Wishlist : {wishlistItems.length} Item(s)</h2>
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

import { IMAGES, ICONS } from "@/assets/Assets";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ product = {}, onWishlistUpdate }) => {
  const { name, images = [], sizes = [], _id } = product;
  const { size, basePrice, discountedPercent } = sizes[0] || {};
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
      toast.info("Product is already in your wishlist!");
    } else {
      wishlist.push({
        productId: _id,
        name,
        size,
        image: images[0]?.url,
        basePrice,
        discountedPercent,
      });
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      toast.success("Product added to wishlist!");
      if (onWishlistUpdate) onWishlistUpdate();
      // Dispatch custom event to update wishlist count
      const event = new Event("wishlistUpdate");
      window.dispatchEvent(event);
    }
  };

  // Add product to cart
  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click event

    let cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const isProductInCart = cart.some((item) => item.productId === _id);

    if (isProductInCart) {
      toast.info("Product is already in the cart!");
    } else {
      cart.push({
        productId: _id,
        name: name,
        size: size || "Default",
        basePrice: basePrice || 0,
        discountedPercent: discountedPercent || 0,
        image: images[0]?.url || "",
        quantity: 1,
      });
      localStorage.setItem("cartProducts", JSON.stringify(cart));
      toast.success("Product added to cart!");
    }
    window.dispatchEvent(new Event("cartUpdate"));
  };

  // Buy Now functionality
  const handleBuyNow = (e) => {
    e.stopPropagation(); // Prevent card click event

    let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const isProductExist = cartProducts.find((product) => product.productId === _id);

    if (isProductExist) {
      toast.error("Product already exists in the cart!");
    } else {
      cartProducts.push({
        productId: _id,
        name: name,
        size: size || "Default",
        basePrice: basePrice || 0,
        discountedPercent: discountedPercent || 0,
        image: images[0]?.url || "",
        quantity: 1,
      });
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }
    window.location.href = "/cart";
  };

  return (
    <>
      <div
        className="card rounded-3 overflow-hidden"
        style={{ cursor: "pointer", height: "410px" }}
        onClick={handleCardClick}
      >
        <div className="card-image position-relative">
          <img
            src={images[0]?.url}
            alt={name}
            style={{ objectFit: "cover", height: "100%" }}
          />
          <div className="d-flex align-items-center justify-content-between card-badges w-100">
            <div className="card-badge ms-auto" onClick={handleAddToWishlist}>
              <img src={ICONS.heartWhite} alt="Favorite" />
            </div>
          </div>
        </div>
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="card-content">
            <img
              src={IMAGES.cardOverlay}
              alt=""
              className="card-overlay z-n1"
            />
            <div className="card-title z-2">{name}</div>
            <div className="d-flex align-items-center gap-1 z-2">
              <span className="price">₹ {discountedPrice}</span>
              <span className="text-muted">₹ {basePrice}</span>
              <span className="badge">{discountedPercent}% OFF</span>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 z-1">
            <button className="btn btn-secondary" onClick={handleBuyNow}>
              <img src={ICONS.share} alt="Buy Now" />
              <span>Buy Now</span>
            </button>
            <button className="btn btn-tertiary" onClick={handleAddToCart}>
              <img src={ICONS.cartIconGrey} alt="Add to Cart" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
      })
    ),
    sizes: PropTypes.arrayOf(
      PropTypes.shape({
        size: PropTypes.string,
        basePrice: PropTypes.number,
        discountedPercent: PropTypes.number,
        stock: PropTypes.number,
      })
    ),
    _id: PropTypes.string,
  }),
  onWishlistUpdate: PropTypes.func,
};

export default Card;

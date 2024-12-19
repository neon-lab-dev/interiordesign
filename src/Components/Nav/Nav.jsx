import { useState, useEffect } from "react";
import { IMAGES, ICONS } from "@/assets/Assets.jsx";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import "../DashboardPages/Dashboard.css";
import userIcon from "../../assets/Icons/user.svg";
import axios from "axios";

const Nav = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0); // Wishlist count state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Fetch cart count from localStorage
  const fetchCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setCartCount(cart.length);
  };

  // Fetch wishlist count from localStorage
  const fetchWishlistCount = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistCount(wishlist.length);
  };

  // Fetch counts on component mount
  useEffect(() => {
    fetchCartCount();
    fetchWishlistCount();

    // Listen for the custom events to update counts
    const handleCartUpdate = () => fetchCartCount();
    const handleWishlistUpdate = () => fetchWishlistCount();

    window.addEventListener("cartUpdate", handleCartUpdate);
    window.addEventListener("wishlistUpdate", handleWishlistUpdate);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("cartUpdate", handleCartUpdate);
      window.removeEventListener("wishlistUpdate", handleWishlistUpdate);
    };
  }, []);

  const [userData, setUserData] = useState(null);

  // Fetch user details
  useEffect(() => {
    const fetchUserData = async () => {
      const user = localStorage.getItem("user");
      setUserData(JSON.parse(user));
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("https://interior-design-backend-nine.vercel.app/api/v1/logout");
      localStorage.removeItem("user");
      navigate("/bedsheets");
      window.location.reload();
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const [user, setUser] = useState(null);

  // Fetch user details
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://interior-design-backend-nine.vercel.app/api/v1/me", { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <nav className="navBar d-flex align-items-center justify-content-between">
      <div className="w-100 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-4">
          <Link to="/" className="logo">
            <img src={IMAGES.logo} alt="logo" />
          </Link>
          <div className="nav-links d-flex align-items-center gap-3 horizontal-nav-links">
            <Link to="/bedsheets">Bedsheets</Link>
            <Link to="/products">Chairs</Link>
            <Link to="/products">Tables</Link>
          </div>
        </div>
        <div className="d-flex align-items-center gap-4 left-container">
          <div className="search-container d-md-flex d-sm-none">
            <img src={ICONS.searchIconGrey} alt="" />
            <input type="text" placeholder="What Are You Looking For?" />
          </div>
          <div className="d-flex align-items-center gap-4 left-menus">
            <Link to="/wishlist" className="d-flex align-items-center gap-1 position-relative">
              <img src={ICONS.heartIconGrey} alt="" />
              <span>Wishlist</span>
              {/* Badge for Wishlist Count */}
              {wishlistCount > 0 && (
                <div className="cart-badge bg-danger">
                  {wishlistCount}
                </div>
              )}
            </Link>
            <Link to="/cart" className="d-flex align-items-center gap-1 position-relative">
              <img src={ICONS.cartIconGrey} alt="" />
              <span>My Cart</span>
              {/* Badge for Cart Count */}
              {cartCount > 0 && (
                <div className="cart-badge">
                  {cartCount}
                </div>
              )}
            </Link>
            {userData ? (
              <div className="d-flex gap-3 align-items-center">
                <Link to="/dashboard" className="d-flex align-items-center gap-1">
                  <img src={ICONS.profileIconGrey} alt="" />
                  <span>Profile</span>
                </Link>
                <p onClick={handleLogout} className="cursor-pointer">Logout</p>
              </div>
            ) : (
              <div>
                <Link to="/login" className="d-flex align-items-center gap-1">
                  <span>Login</span>
                </Link>
              </div>
            )}
            <div
              className="align-items-center gap-1 hamburgerMenu"
              onClick={toggleSidebar}
            >
              <img src={ICONS.hamburgerMenu} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className={`sidebar-ham ${isSidebarOpen ? "open" : ""}`}>
        {userData ? (
          <div>
            <div className="img-Name">
              <img src={userIcon} alt="Profile" className="profile-pic" />
              <span className="c">{userData?.name}</span>
            </div>
            <div className="d-flex flex-column profileContacts-nav gap-1">
              <p>Email: {userData?.email}</p>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="sidebar-links">
          <Link to="/products" onClick={toggleSidebar}>Bedsheets</Link>
          <Link to="/products" onClick={toggleSidebar}>Tables</Link>
          <Link to="/products" onClick={toggleSidebar}>Chairs</Link>
        </div>
        <div className="sidebar-account">
          <Link to="/" onClick={toggleSidebar}>Profile</Link>
          <Link to="/dashboard" onClick={toggleSidebar}>Account Dashboard</Link>
          <Link to="/orderdesign" onClick={toggleSidebar}>Orders</Link>
          <Link to="/password-reset" onClick={toggleSidebar}>Password Reset</Link>
          <Link to="/address-book" onClick={toggleSidebar}>Address Book</Link>
          <Link to="/account-details" onClick={toggleSidebar}>Account Details</Link>
        </div>
        {userData ? (
          <div onClick={handleLogout} className="logout">
            <Link to="/logout" onClick={toggleSidebar}>Logout</Link>
          </div>
        ) : (
          <Link to="/login" onClick={toggleSidebar}>Login</Link>
        )}
      </div>
      <div
        className={`backdrop ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </nav>
  );
};

export default Nav;


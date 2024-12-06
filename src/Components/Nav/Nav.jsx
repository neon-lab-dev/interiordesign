// import { IMAGES, ICONS } from "@/assets/Assets.jsx"
// import { Link } from "react-router-dom"
// import './Nav.css'

// const Nav = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };
//     return (
//         <nav className='navBar d-flex align-items-center justify-content-between'>
//             <div className="w-100 d-flex align-items-center justify-content-between">
//                 <div className="d-flex align-items-center gap-4">
//                     <Link to="/" className="logo">
//                         <img src={IMAGES.logo} alt="logo" />
//                     </Link>
//                     <div className="nav-links d-flex align-items-center gap-3 horizontal-nav-links">
//                         <Link to="/products">Bedsheets</Link>
//                         <Link to="/products">Chairs</Link>
//                         <Link to="/products">Tables</Link>
//                     </div>
//                 </div>
//                 <div className="search-container d-none d-md-none d-sm-flex">
//                     <img src={ICONS.searchIconGrey} alt="" />
//                     <input type="text" placeholder="What Are You Looking For?" />
//                 </div>
//                 <div className="d-flex align-items-center gap-4 left-container">
//                     <div className="search-container d-md-flex d-sm-none">
//                         <img src={ICONS.searchIconGrey} alt="" />
//                         <input type="text" placeholder="What Are You Looking For?" />
//                     </div>
//                     <div className="d-flex align-items-center gap-4 left-menus">
//                         <Link to="/wishlist" className="d-flex align-items-center gap-1">
//                             <img src={ICONS.heartIconGrey} alt="" />
//                             <span>Wishlist</span>
//                         </Link>
//                         <Link to="/cart" className="d-flex align-items-center gap-1">
//                             <img src={ICONS.cartIconGrey} alt="" />
//                             <span>My Cart</span>
//                         </Link>
//                         <Link to="/profile" className="d-flex align-items-center gap-1">
//                             <img src={ICONS.profileIconGrey} alt="" />
//                             <span>Profile</span>
//                         </Link>
//                         <div className="d-flex align-items-center gap-1 d-none hamburgerMenu">
//                             <img src={ICONS.hamburgerMenu} alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="search-container search-container-small d-none">
//                 <img src={ICONS.searchIconGrey} alt="" />
//                 <input type="text" placeholder="What Are You Looking For?" />
//             </div>
//         </nav>
//     )
// }

// export default Nav

import { useState } from "react";
import { IMAGES, ICONS } from "@/assets/Assets.jsx";
import { Link } from "react-router-dom";
import "./Nav.css";
import "../DashboardPages/Dashboard.css";
import ProfileImg from "../../assets/Images/profileimg.jpeg";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
            <Link to="/wishlist" className="d-flex align-items-center gap-1">
              <img src={ICONS.heartIconGrey} alt="" />
              <span>Wishlist</span>
            </Link>
            <Link to="/cart" className="d-flex align-items-center gap-1">
              <img src={ICONS.cartIconGrey} alt="" />
              <span>My Cart</span>
            </Link>
            <Link to="/dashboard" className="d-flex align-items-center gap-1">
              <img src={ICONS.profileIconGrey} alt="" />
              <span>Profile</span>
            </Link>
            <div
              className=" align-items-center gap-1 hamburgerMenu"
              onClick={toggleSidebar}
            >
              <img src={ICONS.hamburgerMenu} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className={`sidebar-ham ${isSidebarOpen ? "open" : ""}`}>
        <div>
          <div className="img-Name">
            <img src={ProfileImg} alt="Profile" className="profile-pic" />
            <span className="c">Kabir Sah</span>
          </div>
          <div className="d-flex flex-column profileContacts-nav gap-1">
            <p>Email: www.kabirsah@gmail.com</p>
            <p>Phone: 5824658726</p>
          </div>
        </div>
        <div className="sidebar-links">
          <Link to="/products">Bedsheets</Link>
          <Link to="/products">Tables</Link>
          <Link to="/products">Chairs</Link>
        </div>
        <div className="sidebar-account">
          <Link to="/">Profile</Link>
          <Link to="/dashboard">Account Dashboard</Link>
          <Link to="/orderdesign">Orders</Link>
          <Link to="/password-reset">Password Reset</Link>
          <Link to="/address">Address Book</Link>
          <Link to="/account-details">Account Details</Link>
        </div>
        <div className="logout">
          <Link to="/logout">Logout</Link>
        </div>
      </div>
      <div
        className={`backdrop ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </nav>
  );
};

export default Nav;

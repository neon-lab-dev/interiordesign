

import { useState } from "react";
import { IMAGES, ICONS } from "@/assets/Assets.jsx";
import { Link } from "react-router-dom";
import "./Nav.css";
import "../DashboardPages/Dashboard.css";
import ProfileImg from "../../assets/Images/profileimg.jpeg";
import { NavLink } from "react-router-dom";

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
         
        </div>
        <div className="d-flex align-items-center gap-4 left-container">
        <div className="nav-links d-flex align-items-center gap-3 horizontal-nav-links">
        <NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive ? "active-link border-bottom border-2 " : "inactive-link"
        }
      >
        Home
      </NavLink>
      <NavLink   
        to="/bedsheets" 
        className={({ isActive }) => 
          isActive ? "active-link border-bottom border-2" : "inactive-link"
        }
      >
        Bedsheets
      </NavLink>
            <button type="submit" className="w-100 custom-text-2  btnNav">
                    Get Free Quote
                  </button>
          </div>
          <div className="d-flex align-items-center gap-4 left-menus">
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
          <Link to="/">Home</Link>
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

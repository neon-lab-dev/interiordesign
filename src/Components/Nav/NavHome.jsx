

import { useState } from "react";
import { IMAGES, ICONS } from "@/assets/Assets.jsx";
import { Link } from "react-router-dom";
import "./Nav.css";
import "../DashboardPages/Dashboard.css";
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
        
        <div className="sidebar-links">
          <Link to="/">Home</Link>
          <Link to="/bedsheets">Bedsheets</Link>
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
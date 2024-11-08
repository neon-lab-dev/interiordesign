import React from "react";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink
        to="/dashboard"
        className="sidebar-button active"
        activeClassName="active"
      >
        Account Dashboard
      </NavLink>

      <NavLink to="/orders" className="sidebar-button" activeClassName="active">
        Orders
      </NavLink>

      <NavLink
        to="/password-reset"
        className="sidebar-button"
        activeClassName="active"
      >
        Password Reset
      </NavLink>

      <NavLink
        to="/adress-book"
        className="sidebar-button"
        activeClassName="active"
      >
        Address Book
      </NavLink>

      <NavLink
        to="/account-details"
        className="sidebar-button"
        activeClassName="active"
      >
        Account Details
      </NavLink>
    </div>
  );
};

export default Sidebar;

import "./Dashboard.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleOrders = (e) => {
    e.preventDefault();
    navigate("/orderdesign");
  };
  return (
    <div className="sidebar pe-2 sidebar-largescreen">
      <NavLink
        to="/dashboard"
        className="sidebar-button"
        activeClassName="active"
      >
        Account Dashboard
      </NavLink>

      <NavLink
        to="/orderdesign"
        className="sidebar-button"
        activeClassName="active"
        //onClick={handleOrders}
      >
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
        to="/address"
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

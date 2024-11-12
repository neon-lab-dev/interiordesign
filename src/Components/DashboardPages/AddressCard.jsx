import "./Dashboard.css";
import { FaRegEdit } from "react-icons/fa";

const AddressCard = () => {
  return (
    <div className="address-card d-flex flex-column gap-1 ">
      <span className="address-card-head">Default Shipping Address 1</span>
      <span className="edit-icon">
        <FaRegEdit />
      </span>
      <span className="address-card-name">Kabir Sah</span>
      <div className="address-card-details">
        <span>123 Main Street, Apt 4B, Cityville, State 54321</span>
        <span className="mt-1">United States</span>
      </div>
    </div>
  );
};

export default AddressCard;

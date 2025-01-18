import "./Dashboard.css";
import { FaRegEdit } from "react-icons/fa";

const AddressCard = ({title, userName, address, onEdit}) => {
  return (
    <div className="address-card d-flex flex-column gap-1 ">
      <span className="address-card-head">{title}</span>
      <span onClick={onEdit} className="edit-icon">
        <FaRegEdit />
      </span>
      <span className="address-card-name mt-2 fw-bold">{userName}</span>
      {
        address ?
        <div className="address-card-details mt-2">
        <p>{address?.address}</p>
        <p className="mt-1">{address?.city}</p>
      </div>
      :
      <p className="mt-2">Please add secondary address</p>
      }
    </div>
  );
};

export default AddressCard;

import "./Dashboard.css";
import { FaRegEdit } from "react-icons/fa";
import ProfileImg from "../../assets/Images/profileimg.jpeg";

const AccountDetails = () => {
  return (
    <div className="account-details-card">
      <h3 className="account-details-card-title">Account Details</h3>
      <span className="edit-icon">
        <FaRegEdit />
      </span>
      <div className="img-Name">
        <img src={ProfileImg} alt="Profile" className="profile-pic" />
        <span className="c">Kabir Sah</span>
      </div>
      <div className="d-flex flex-column profileContacts gap-1">
        <p>Email: www.kabirsah@gmail.com</p>
        <p>Phone: 5824658726</p>
      </div>
    </div>
  );
};

export default AccountDetails;

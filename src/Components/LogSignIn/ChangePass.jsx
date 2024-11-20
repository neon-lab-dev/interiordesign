import LoginImg from "../../assets/Images/loginimg.jpeg";
import { IMAGES } from "../../assets/Assets";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <section className="">
      <div className="login-container d-flex  items-center justify-between login-section w-100">
        <div className="login-image-container">
          <img src={LoginImg} alt="login" className="login-image" />
          <img src={IMAGES.logo} alt="" className="logo-top" />
          <div className="image-overlay">
            <span className="logo-text">We Create Your Dream Home</span>
          </div>
        </div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="login-form justify-content-start py-5"
        >
          <div className="form-title">Change Password</div>
          <div className="inp-grp">
            <label htmlFor="password">Enter the new password</label>
            <input
              type="text"
              id="password"
              placeholder="Enter The New Password Here"
            />
          </div>
          <div className="inp-grp">
            <label htmlFor="password">Confirm the new password</label>
            <input
              type="text"
              id="password"
              placeholder="Re-Enter The New Password Here"
            />
          </div>

          <button type="submit" className="btn btn-base-transparent">
            Submit
          </button>
          <div className="d-flex justify-content-center "></div>
        </form>
      </div>
    </section>
  );
};

export default Login;

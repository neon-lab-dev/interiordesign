import LoginImg from "../../assets/Images/loginimg.jpeg";
import { IMAGES } from "../../assets/Assets";
import "./Login.css";

const Login = () => {
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
        <form action="" className="login-form justify-content-start py-5">
          <div className="form-title">Forgot Password</div>
          <div className="inp-grp">
            <label htmlFor="emailOrPhone">Enter the email or phone number</label>
            <input
              type="text"
              id="emailOrPhone"
              placeholder="Enter The Email or Phone Number"
            />
          </div>

          <button type="submit" className="btn btn-base-transparent">
            Submit
          </button>
          <div className="d-flex justify-content-center ">
            <span
              className="danger-text-neighbor"
              style={{ marginRight: "2px" }}
            >
              Didn&apos;t received? <span className="text-danger">Send again</span>
            </span>

          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

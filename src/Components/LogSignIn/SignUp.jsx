import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../../assets/Images/loginimg.jpeg";
import { IMAGES } from "../../assets/Assets";
import { useForm } from "react-hook-form";
import API from "../../utils/api";
import "./Login.css";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await API.post("/register", {
        full_name: data.full_name,
        email: data.email,
        phoneNo: data.phoneNo,
        password: data.password,
        confirm_password: data.confirm_password,
      });

      // Success notification
      alert("Account created successfully!");

      // Redirect to login
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <section>
      <div className="login-container d-flex items-center justify-between login-section w-100">
        <div className="login-image-container">
          <img src={LoginImg} alt="login" className="login-image" />
          <img src={IMAGES.footerLogo} alt="" className="logo-top" />
          <div className="image-overlay">
            <span className="logo-text">We Create Your Dream Home</span>
          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-title">Create an Account</div>

          <div className="inp-grp">
            <label htmlFor="full_name">Full Name</label>
            <input
              type="text"
              id="full_name"
              {...register("full_name", {
                required: "Full name is required",
              })}
              placeholder="Enter Your Full Name"
            />
            {errors.full_name && (
              <p className="text-danger">{errors.full_name.message}</p>
            )}
          </div>

          <div className="inp-grp">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              placeholder="Enter Your Email"
            />
            {errors.email && <p className="text-danger">{errors.email.message}</p>}
          </div>

          <div className="inp-grp">
            <label htmlFor="phoneNo">Phone</label>
            <input
              type="text"
              id="phoneNo"
              {...register("phoneNo", {
                required: "Phone number is required",
              })}
              placeholder="Enter Your Phone Number"
            />
            {errors.phoneNo && (
              <p className="text-danger">{errors.phoneNo.message}</p>
            )}
          </div>

          <div className="inp-grp">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              placeholder="Create Strong Password"
            />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}
          </div>

          <div className="inp-grp">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              id="confirm_password"
              {...register("confirm_password", {
                required: "Please confirm your password",
                validate: (value, { password }) =>
                  value === password || "Passwords do not match",
              })}
              placeholder="Re-Enter Password"
            />
            {errors.confirm_password && (
              <p className="text-danger">{errors.confirm_password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-base-transparent"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Account..." : "Sign Up"}
          </button>

          <div className="d-flex justify-content-center">
            <span className="danger-text-neighbor" style={{ marginRight: "2px" }}>
              Already have an account?
            </span>
            <Link to="/login" className="text-danger">
              login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;

import "./RegisterForm.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const RegisterForm = () => {
  return (
    <div className="wrapperRegister">
      <span
        className="icon-close"
        onClick={() => {
          document.querySelector(".wrapperRegister").style.display = "none";
          document.querySelector(".createcont").style.display = "flex";
        }}
      >
        <IoCloseSharp />
      </span>
      <form action="">
        <h1>Register</h1>
        <div className="register-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="register-box">
          <input type="email" placeholder="Email" />
          <MdEmail className="icon" />
        </div>

        <div className="register-box">
          <input type="password" placeholder="Password" />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <input type="checkbox" />
          <span>I agree to the terms & conditions</span>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
        <div className="login-link">
          <p>You have already an account?</p>
          <div
            className="login"
            onClick={() => {
              document.querySelector(".wrapperLogin").style.display = "block";
              document.querySelector(".wrapperRegister").style.display = "none";
            }}
          >
            Sign In
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

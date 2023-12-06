import "./LoginForm.css";
import { FaLock, FaUser, FaFacebook, FaApple, FaTwitter } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const LoginForm = () => {
  return (
    <div className="wrapperLogin">
      <span
        className="icon-close"
        onClick={() => {
          document.querySelector(".wrapperLogin").style.display = "none";
          document.querySelector(".createcont").style.display = "flex";
        }}
      >
        <IoCloseSharp />
      </span>
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" />
          <FaLock className="icon" />
        </div>

        <div className="remember-forgot">
          <input type="checkbox" />
          <span>Remember me</span>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="register-link">
          <p>Don't have an account?</p>
          <div
            className="register"
            onClick={() => {
              document.querySelector(".wrapperRegister").style.display =
                "block";
              document.querySelector(".wrapperLogin").style.display = "none";
            }}
          >
            <div className="registersmal">
              <div className="registerBtn">
                <p>Create Account</p>
              </div>
            </div>
          </div>
          <h4>
            Sing Up with
            <a href="#">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i class="bx bxl-apple"></i>
            </a>
            <a href="#">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i class="bx bxl-google"></i>
            </a>
            <span>or</span>
          </h4>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

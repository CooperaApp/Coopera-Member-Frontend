import { useState } from "react";
import EyeIcon from "../../../assets/images/svg/EyeIcon.svg";
import ArrowBack from "../../../assets/images/png/arrow-back.png";
import CooperaLogo from "../../../assets/images/svg/CooperaLogo.svg";
import DashboardImage from "../../../assets/images/svg/DashboardImg2.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";
import { notifySuccess, notifyError } from "../../../utils/functions/func";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      const response = await axios.post(
        "http://54.234.211.52:8081/login",
        formData,
      );

      const access_token = response.data.access_token;
      sessionStorage.setItem("token", access_token);
      // localStorage.setItem("token", access_token);

      notifySuccess("Login successful");
      setTimeout(() => {
        navigate("/dashboard");
      }, 5000);

    } catch (error) {
      console.error("Login failed", error.response);
      notifyError("Invalid email or password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });


  return (
    <div className="flex h-screen pt-0 overflow-hidden">
      <div className="border border-purple-100 w-1/2 bg-[#7C39DE] overflow-hidden">
        <div className="relative">
          <img
            src={ArrowBack}
            alt="Arrow Back"
            style={{
              maxWidth: "2%",
              maxHeight: "2%",
              position: "absolute",
              top: "3%",
              left: "2%",
              filter: "invert(1)",
            }}
          />
        </div>
        <div className="h-40 w-96 mt-12 ml-28 ">
          <p className="mb-5 authentication-big-font-style">
            Build your Cooperative Society using Coopera
          </p>
          <p className="authentication-small-font-style">
            With Coopera, managing your cooperative society is seamless. Elevate
            efficiency and foster financial growth
          </p>
        </div>
        <div className="mr-3">
          <img
            className="w-96 ml-28 -m-32"
            src={DashboardImage}
            alt="Your Image"
            style={{ height: "705px", width: "489px" }}
          />
        </div>
      </div>

      <div className="w-1/2 p-10 pt-1 mt-32">
        <img src={CooperaLogo} alt="Logo" className="h-9 w-9 mb-2 -mt-5" />
        <h2 className="welcome-back-big-font-style mb-7">Welcome back!</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-5">
            <label className="sub-text-font-style">Email Address</label>
            <br />
            <input
              type="text"
              className={`w-full h-10 px-4 text-xs ${
                errors.email ? "border-red-500" : ""
              }`}
              style={{ backgroundColor: "#F3F3F3", borderRadius: "4px" }}
              placeholder="Enter email address"
              onChange={handleInputChange}
              value={formData.email}
              name="email"
            />
            {errors.email && (
              <div className="text-red-500 text-xs mt-1">{errors.email}</div>
            )}
          </div>

          <div className="mb-12 relative">
            <label className="sub-text-font-style">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                style={{ backgroundColor: "#F3F3F3", borderRadius: "4px" }}
                className={`w-full h-10 px-4 text-xs ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="Enter password"
                onChange={handleInputChange}
                value={formData.password}
                name="password"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <img
                  src={EyeIcon}
                  alt="Eye Icon"
                  className="h-4 w-4 cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
            {errors.password && (
              <div className="text-red-500 text-xs mt-1">{errors.password}</div>
            )}
            <a href="/forgot-password" className="forgotten-password-link">Forgotten Password?</a>
          </div>

          <div className="w-full h-10 px-4 rounded-md mb-2 bg-[#7C39DE] hover:bg-purple-500 hover:border-purple-500 cursor-pointer border-2 border-[#7C39DE] text-white flex items-center justify-center font-bold">
            <button type="submit">Login</button>
            <ToastContainer />
          </div>
        </form>

        <div className="flex shrink-0 items-center justify-center mb-2">
          <p className="account-does-not-exist-font-style">
            Dont have an account?{" "}
          </p>
          <a
            className="account-does-not-exist-register-style"
            href="/registration"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import { useState } from "react";
import EyeIcon from "../../../assets/images/svg/EyeIcon.svg";
import ArrowBack from "../../../assets/images/png/arrow-back.png";
import CooperaLogo from "../../../assets/images/svg/CooperaLogo.svg";
import DashboardImage from "../../../assets/images/svg/DashboardImg.svg";
import { ToastContainer } from "react-toastify";
import { notifySuccess, notifyError } from "../../../utils/functions/func.jsx";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from "../../../utils/api/API_BASE_URL.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import * as Yup from "yup";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const token = params.get("token");

  // console.log("Token:", token);

  const { memberId, memberEmail } = JSON.parse(atob(token.split('.')[1]));

  console.log("Member ID:", memberId);
  // console.log("Member Email:", memberEmail);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
    token: token
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    phoneNumber: Yup.string().required("Required"),
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    setErrors({
      ...errors,
      [event.target.name]: undefined,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log('From data: ',formData);
      await validationSchema.validate(formData, { abortEarly: false });
      const { confirmPassword, ...dataToSend } = formData;
      console.log('data to send: ',dataToSend);

      await axios.post(`${BASE_URL}/member/register`, dataToSend);

      notifySuccess("Registration Successful, Redirecting to login...");
      setTimeout(() => {
        navigate("/memberslogin");
      }, 3000);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors = {};
        error.inner.forEach((validationError) => {
          newErrors[validationError.path] = validationError.message;
        });
        setErrors(newErrors);
      } else {
        console.error(error);
        notifyError("An error occurred");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const inputConfig = [
    { label: "First Name", placeholder: "First Name", name: "firstName" },
    { label: "Last Name", placeholder: "Last Name", name: "lastName" },
    { label: "Phone Number", placeholder: "Phone Number", name: "phoneNumber" },
    { label: "Password", placeholder: "Choose a password", name: "password" },
    { label: "Confirm Password", placeholder: "Enter password again", name: "confirmPassword" },
  ];

  return (
    <div className="flex h-screen pt-0 overflow-hidden">
      <div className="border border-purple-100 w-1/2 bg-[#7C39DE] overflow-hidden">
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
        <div className="h-40 w-96 mt-12 ml-28 ">
          <p className="mb-5 authentication-big-font-style " style={{color: 'white', fontWeight: 700, fontSize: 'xx-large'}}>
            Build your Cooperative Society using Coopera
          </p>
          <p className="authentication-small-font-style " style={{color: 'white'}}>
            With Coopera, managing your cooperative society is seamless. Elevate
            efficiency and foster financial growth
          </p>
        </div>
        <div className="mt-3 mr-3 ">
          <img
            className="relative w-96 ml-28"
            src={DashboardImage}
            style={{ height: "705px", width: "489px" }}
            alt=""
          />
          <div className=""></div>
        </div>
      </div>

      <div className="h-full w-1/2 p-10 pt-20 overflow-y-auto">
        <img src={CooperaLogo} alt="Logo" className="h-9 w-9 mb-2 -mt-5" />
        <h2 className="mb-1 get-started-big-font-style" style={{ fontWeight: 700, fontSize: 'xx-large'}}>Get Started</h2>
        <p className="mb-8">Join Other Coperative Members On Coopera</p>

        <form onSubmit={handleFormSubmit} className="">
          
          <div className="flex mb-5">
            <div className="mr-2">
              <label className="sub-text-font-style">First Name</label>
              <input
                type="text"
                className="w-full h-10 px-9 text-xs "
                style={{ backgroundColor: "#F3F3F3", borderRadius: "4px" }}
                placeholder="First Name"
                onChange={handleInputChange}
                value={formData.firstName}
                name="firstName"
              />
            </div>
            <div>
              <label className="sub-text-font-style">Last Name</label>
              <input
                type="text"
                className="w-full h-10 px-9 text-xs"
                style={{ backgroundColor: "#F3F3F3", borderRadius: "4px" }}
                placeholder="Last Name"
                onChange={handleInputChange}
                value={formData.lastName}
                name="lastName"
              />
            </div>
          </div>

          {inputConfig.slice(2).map((input) => (
            <div className="mb-5" key={input.name}>
              <label className="sub-text-font-style">{input.label}</label>
              <div className="relative">
                <input
                  type={
                    input.name.includes("password")
                      ? showPassword
                        ? "text"
                        : "password"
                      : "text"
                  }
                  className="w-full h-10 px-4 text-xs"
                  style={{ backgroundColor: "#F3F3F3", borderRadius: "4px" }}
                  placeholder={input.placeholder}
                  onChange={handleInputChange}
                  value={formData[input.name]}
                  name={input.name}
                />

                {input.name.includes("password") && (
                  <div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer appearance-none"
                    onClick={() =>
                      input.name === "password"
                        ? togglePasswordVisibility()
                        : toggleConfirmPasswordVisibility()
                    }
                  >
                    <img src={EyeIcon} alt="Eye Icon" className="h-4 w-4" />
                  </div>
                )}
              </div>
              {errors[input.name] && (
                <div className="text-red-500 text-xs mt-1">
                  {errors[input.name]}
                </div>
              )}
            </div>
          ))}

          <div className="w-full mt-10 h-10 px-4 rounded-md hover:bg-purple-500 hover:border-purple-500 mb-2 bg-[#7C39DE] cursor-pointer border-2 border-[#7C39DE] text-white flex items-center justify-center font-bold">
            <button
              type="submit"
              className="hover:bg-purple-500 cursor-pointer"
              style={{ border: "none", outline: "none" }}
            >
              Register
            </button>
            <ToastContainer />
          </div>
        </form>

        <div className="flex items-center justify-center mb-2">
          <p className="account-exists-font-style mr-1" style={{color:'grey'}} >
            Already have an account?{" "}
          </p>
          <a className="account-exists-login-style" href="/memberslogin" style={{color:'#7C39DE',fontWeight: 'bold'}}>
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;

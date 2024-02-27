import * as Yup from "yup";
import {  toast } from "react-toastify";

export const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
    name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Required"),
});

export function validateLastName(value) {
    return value.length >= 2;
}

export function validateEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}

export const notifySuccess = (arg) => {
    toast.success(arg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
};


export const notifyError = (arg) => {
    toast.error(arg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

export function formatNumberWithCommasAndDecimal(number, decimalPlaces) {
    // Ensure the input is a valid number
    if (isNaN(number)) {
      return "Invalid number";
    }
  
    // Use toLocaleString to add commas
    let formattedNumber = number.toLocaleString();
  
    // Check if decimalPlaces is a valid number
    if (!isNaN(decimalPlaces) && decimalPlaces >= 0) {
      // Use toFixed to control decimal places
      formattedNumber = Number(number).toFixed(decimalPlaces);
    }
  
    return formattedNumber;
  }
  
  
  export function formatNumberWithCommasAndDecimal2(number, decimalPlaces) {
    // Ensure the input is a valid number
    if (isNaN(number)) {
      return "Invalid number";
    }
  
    // Format number with commas and control decimal places
    const formattedNumber = number.toLocaleString(undefined, {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces
    });
  
    return formattedNumber;
  }
  
 
  
  
import React, { useState } from "react";
import styled from "styled-components";

const UserDetailsForm = () => {
      const [formData, setFormData] = useState({
            name: "",
            email: "",
            phone: "",
            pincode: "",
            city: "",
            state: "",
            address: "",
            gst: false,
      });

      const [errors, setErrors] = useState({});

      const validateField = (name, value) => {
            let errorMessage = "";

            if (typeof value === "string" && !value.trim()) {
                  errorMessage = `${name[0].toUpperCase() + name.slice(1)} is required.`;
            } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                  errorMessage = "Please enter a valid email address.";
            } else if (name === "phone" && !/^\d{10}$/.test(value)) {
                  errorMessage = "Please enter a valid 10-digit phone number.";
            }

            setErrors((prev) => ({
                  ...prev,
                  [name]: errorMessage,
            }));
      };

      const handleChange = (e) => {
            const { name, value, type, checked } = e.target;
            const newValue = type === "checkbox" ? checked : value;

            setFormData((prev) => ({
                  ...prev,
                  [name]: newValue,
            }));

            validateField(name, newValue);
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            let hasError = false;

            Object.keys(formData).forEach((key) => {
                  validateField(key, formData[key]);
                  if (typeof formData[key] === "string" && !formData[key].trim() && key !== "gst") {
                        hasError = true;
                  }
            });

            if (hasError) return;

            console.log(formData);
            alert("Form submitted successfully!");

            setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  pincode: "",
                  city: "",
                  state: "",
                  address: "",
                  gst: false,
            });

            setErrors({});
      };

      const renderInput = (label, name, type = "text", placeholder) => (
            <div className="mb-4">
                  <Label htmlFor={name}>{label}</Label>
                  <Input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="placeholder:text-[14px] md:placeholder:text-[18px]"
                  />
                  {errors[name] && <ErrorMessage>{errors[name]}</ErrorMessage>}
            </div>
      );

      return (
            <div className="flex md:bg-[#fff]  md:pt-0 w-screen md:h-screen items-center justify-center overflow-hidden">
                  <div className="bg-[#0E1926] max-w-[640px] w-full h-full 2xl:max-w-[640px] 2xl:h-[1080px] overflow-hidden px-4 py-4 2xl:py-20 sm:px-6 md:px-10 md:flex md:flex-col md:items-center md:justify-center md:gap-[55px]">
                        <div className="flex items-start">
                              <h2 className="text-[20px] leading-[24.2px] font-[600] text-[#FFFFFF]">Step 1 :</h2>
                              <h3 className="text-[20px] leading-[24.2px] font-[600] font-[Inter] ml-[60px] 2xl:ml-[80px]">Your Details</h3>
                        </div>
                        <form className="mt-4" onSubmit={handleSubmit}>
                              {renderInput("Name*", "name", "text", "Enter your name")}
                              {renderInput("Email Address*", "email", "email", "Enter your email")}
                              {renderInput("Phone Number*", "phone", "tel", "Enter your phone number")}
                              <div className="mb-2 flex flex-col sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-[48%]">
                                          {renderInput("Pincode*", "pincode", "text", "Enter your pincode")}
                                    </div>
                                    <div className="w-full sm:w-[48%]">
                                          {renderInput("City*", "city", "text", "Enter your city")}
                                    </div>
                              </div>
                              {renderInput("State*", "state", "text", "Enter your state")}
                              {renderInput("Address", "address", "text", "Enter your address")}
                              <div className="mb-4 flex justify-center udf-bttn">
                                    <Checkbox
                                          type="checkbox"
                                          name="gst"
                                          checked={formData.gst}
                                          onChange={handleChange}
                                    />
                                    <Label htmlFor="gst" className="mt-3 ml-3">
                                          Do You Have GST?
                                    </Label>
                              </div>
                              <div className="flex justify-end">
                                    <Button type="submit">Next</Button>
                              </div>
                        </form>
                  </div>
            </div>
      );
};

export default UserDetailsForm;

// Styled Components
const Label = styled.label`
  display: block;
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24.2px;
  text-align: left;
  color: #ffffff;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 12px;
    color: gray;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 17px;
  background-color: #fff;
  color: black;
  ::placeholder {
    color: #333;
    font-size: 1rem;
  }
  outline: none;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: normal;

  &:focus {
    outline: none;
    ring: 2px solid blue;
  }

  @media (max-width: 768px) {
    padding: 12px;
    ::placeholder {
      font-size: 12px;
    }
  }
`;

const Checkbox = styled.input`
  width: 20px;
`;

const Button = styled.button`
  width: 181px;
  height: 74px;
  border-radius: 17px;
  background-color: #cb935d;
  font-family: "Inter";
  font-size: 20px;
  font-weight: 400;
  line-height: 24.2px;
  text-align: center;

  @media (max-width: 768px) {
    height: 48px;
    width: 100px;
    font-size: 16px;
    margin: auto;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.25rem;
  display: block;
`;

import React, { useState } from "react";
import styled from "styled-components";

const DefaulterDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const validateField = (name, value) => {
    let errorMessage = "";

    if (!value.trim()) {
      errorMessage = `${name[0].toUpperCase() + name.slice(1)} is required.`;
    } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMessage = "Please enter a valid email address.";
    } else if (name === "phone" && !/^\d{10}$/.test(value)) {
      errorMessage = "Please enter a valid 10-digit phone number.";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    // Validate the field on change
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasError = false;

    // Validate all fields on submit
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (!formData[key].trim()) {
        hasError = true;
      }
    });

    if (hasError) return;

    console.log("Defaulter Details Submitted:", formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
    });

    setErrors({});
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden bg-stone-300 defaulter">
      <div className="bg-[#0E1926] max-w-[640px] w-full h-full 2xl:max-w-[640px] 2xl:h-[1080px] overflow-hidden px-4 py-4 2xl:py-20 sm:px-6 md:px-10">
        <div className="flex items-start mb-6 pt-2">
          <h2 className="text-[20px] leading-[24.2px] font-[600] font-[Inter]">Step 3 :</h2>
          <h3 className="text-[20px] leading-[24.2px] font-[600] font-[Inter] ml-[80px] 2xl:ml-[130px]">
            Defaulter Details
          </h3>
        </div>

        <form
          className="flex flex-col justify-between items-baseline w-full h-full pb-20"
          onSubmit={handleSubmit}
        >
          <div>
            {/* Name Input */}
            <div className="mb-4">
              <Label htmlFor="name">Name*</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <Label htmlFor="email">Email Address*</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </div>

            {/* Phone Input */}
            <div className="mb-4">
              <Label htmlFor="phone">Phone Number*</Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
              {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex w-full justify-between mt-6">
            <Button type="button" variant="secondary" onClick={() => alert("Go back")}>
              Back
            </Button>
            <Button type="submit">Next</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DefaulterDetails;

/* Styled Components */
const Label = styled.label`
  display: block;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  display: block;
  width: 541px;
  height: 74px;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #ccc;
  background-color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #333;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 326px;
    height: 60px;
  }
`;

const Button = styled.button`
  width: 181px;
  height: 74px;
  border-radius: 17px;
  background-color: ${(props) => (props.variant === "secondary" ? "#f0f0f0" : "#cb935d")};
  font-family: "Inter";
  font-size: 20px;
  font-weight: 400;
  line-height: 24.2px;
  text-align: center;
  color: ${(props) => (props.variant === "secondary" ? "#333" : "#fff")};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    height: 60px;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 1rem;
  font-weight:600;
  margin-top: 0.25rem;
  display: block;
`;

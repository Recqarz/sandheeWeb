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

      const [errors, setErrors] = useState({
            name: "",
            email: "",
            phone: "",
            pincode: "",
            city: "",
            state: "",
            address: "",
      });

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
            alert("Form submitted successfully!");

            setErrors({});
      };

      return (
            <div className="flex w-screen h-screen items-center justify-center overflow-hidden bg-stone-300">
                  <div className="bg-[#0E1926] max-w-[640px] w-full h-full 2xl:max-w-[640px] 2xl:h-[1080px] overflow-hidden px-4 py-4 2xl:py-20 sm:px-6 md:px-10">
                        <div className="flex items-start">
                              <h2 className="text-[20px] leading-[24.2px] font-[600] text-[#FFFFFF]">Step 1 :</h2>
                              <h3 className="text-[20px] leading-[24.2px] font-[600] font-[Inter] ml-[60px] 2xl:ml-[80px]">Your Details</h3>
                        </div>
                        <form className="mt-4" onSubmit={handleSubmit}>
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

                              <div className="mb-4 flex flex-col sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-[48%]">
                                          <Label htmlFor="pincode">Pincode*</Label>
                                          <Input
                                                type="text"
                                                name="pincode"
                                                value={formData.pincode}
                                                onChange={handleChange}
                                                placeholder="Enter your pincode"
                                          />
                                          {errors.pincode && <ErrorMessage>{errors.pincode}</ErrorMessage>}
                                    </div>
                                    <div className="w-full sm:w-[48%]">
                                          <Label htmlFor="city">City*</Label>
                                          <Input
                                                type="text"
                                                name="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                placeholder="Enter your city"
                                          />
                                          {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
                                    </div>
                              </div>

                              <div className="mb-4">
                                    <Label htmlFor="state">State*</Label>
                                    <Input
                                          type="text"
                                          name="state"
                                          value={formData.state}
                                          onChange={handleChange}
                                          placeholder="Enter your state"
                                    />
                                    {errors.state && <ErrorMessage>{errors.state}</ErrorMessage>}
                              </div>

                              <div className="mb-4">
                                    <Label htmlFor="address">Address</Label>
                                    <Input
                                          name="address"
                                          value={formData.address}
                                          onChange={handleChange}
                                          placeholder="Enter your address"
                                    />
                              </div>

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
`;

const Input = styled.input`
  width: 100%;
  padding: 2px;
  border-radius: 17px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: #fff;
  color: black;
  ::placeholder {
    color: #333;
  }
  outline: none;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: normal;

  &:focus {
    outline: none;
    ring: 2px solid blue;
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

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    height: 60px;
    width: 150px;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.25rem;
  display: block;
`;

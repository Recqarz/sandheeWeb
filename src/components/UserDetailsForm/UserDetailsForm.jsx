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

      const handleChange = (e) => {
            const { id, value, type, checked } = e.target;
            setFormData((prev) => ({
                  ...prev,
                  [id]: type === "checkbox" ? checked : value,
            }));
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log(formData);

            // Reset all fields to their initial values
            setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  pincode: "",
                  city: "",
                  state: "",
                  address: "",
                  gst: false, // Reset the checkbox field as well
            });
      };

      return (
            <div className="flex w-screen h-screen items-center justify-center overflow-hidden bg-stone-300">
                  <div className="bg-[#0E1926] max-w-[640px] w-full h-full 2xl:max-w-[640px] 2xl:h-[1080px] overflow-hidden px-4 py-4 2xl:py-20 sm:px-6 md:px-10">
                        <div className="flex items-start">
                              <h2 className="text-[20px] leading-[24.2px] font-[600] text-[#FFFFFF] ">Step 1 :</h2>
                              <h3 className="text-[20px] leading-[24.2px] font-[600] font-[Inter] ml-[60px] 2xl:ml-[80px] ">Your Details</h3>
                        </div>
                        <form className="mt-4" onSubmit={handleSubmit}>
                              <div className="mb-4">
                                    <Label htmlFor="name">Name*</Label>
                                    <Input
                                          type="text"
                                          id="name"
                                          value={formData.name}
                                          onChange={handleChange}
                                          placeholder="Enter your name"
                                          required
                                    />
                              </div>

                              <div className="mb-4">
                                    <Label htmlFor="email">Email Address*</Label>
                                    <Input
                                          type="email"
                                          id="email"
                                          value={formData.email}
                                          onChange={handleChange}
                                          placeholder="Enter your email"
                                          required
                                    />
                              </div>

                              <div className="mb-4">
                                    <Label htmlFor="phone">Phone Number*</Label>
                                    <Input
                                          type="tel"
                                          id="phone"
                                          value={formData.phone}
                                          onChange={handleChange}
                                          placeholder="Enter your phone number"
                                          required
                                    />
                              </div>

                              <div className="mb-4 flex flex-col sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-[48%]">
                                          <Label htmlFor="pincode">Pincode*</Label>
                                          <Input
                                                type="text"
                                                id="pincode"
                                                value={formData.pincode}
                                                onChange={handleChange}
                                                placeholder="Enter your pincode"
                                                required
                                          />
                                    </div>
                                    <div className="w-full sm:w-[48%]">
                                          <Label htmlFor="city">City*</Label>
                                          <Input
                                                type="text"
                                                id="city"
                                                value={formData.city}
                                                onChange={handleChange}
                                                placeholder="Enter your city"
                                                required
                                          />
                                    </div>
                              </div>

                              <div className="mb-4">
                                    <Label htmlFor="state">State*</Label>
                                    <Input
                                          type="text"
                                          id="state"
                                          value={formData.state}
                                          onChange={handleChange}
                                          placeholder="Enter your state"
                                          required
                                    />
                              </div>

                              <div className="mb-4">
                                    <Label htmlFor="address">Address</Label>
                                    <Input
                                          id="address"
                                          value={formData.address}
                                          onChange={handleChange}
                                          placeholder="Enter your address"
                                    />
                              </div>

                              <div className="mb-4 flex justify-center udf-bttn">
                                    <Chackbox
                                          type="checkbox"
                                          id="gst"
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

// Styled components
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

const Chackbox = styled.input`
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

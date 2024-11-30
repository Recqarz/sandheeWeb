import React from "react";
import styled from "styled-components";



const UserDetailsForm = () => {
      return (
            <div className="flex w-screen h-screen items-center justify-center overflow-hidden bg-stone-300">
                  <div className="bg-[#0E1926] max-w-[640px] w-full h-full 2xl:max-w-[640px] 2xl:h-[1080px] overflow-hidden px-4 py-4 2xl:py-20 sm:px-6 md:px-10">
                       <div className="flex items-start">
                       <h2 className="text-[20px] leading-[24.2px] font-[600] text-[#FFFFFF] ">Step 1 :</h2>
                       <h3 className=" text-[20px] leading-[24.2px] font-[600] font-[Inter] ml-[60px] 2xl:ml-[80px]  ">Your Details</h3>
                       </div>
                        <form className="mt-4">
                              <div className="mb-4">
                                    <Label htmlFor="name">Name*</Label>
                                    <Input
                                          type="text"
                                          id="name"
                                          className="w-full p-2 rounded-[17px] py-[1rem] px-6 bg-[#fff] text-black placeholder-gray-400 focus:outline-none"
                                          placeholder="Enter your name"
                                          required
                                    />
                              </div>

                              <div className="mb-4">
                                    <Label htmlFor="email">Email Address*</Label>
                                    <Input
                                          type="email"
                                          id="email"
                                          className="w-full p-2 rounded-[17px] py-[1rem] px-6 bg-[#fff] text-black placeholder-gray-400 focus:outline-none"
                                          placeholder="Enter your email"
                                          required
                                    />
                              </div>

                              <div className="mb-4">
                                    <Label htmlFor="phone">Phone Number*</Label>
                                    <Input
                                          type="tel"
                                          id="phone"
                                          className="w-full p-2 rounded-[17px] py-[1rem] px-6 bg-[#fff] text-black placeholder-gray-400 focus:outline-none"
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
                                                className="w-full p-2 rounded-[17px] py-[1rem] px-6 bg-[#fff] text-black placeholder-gray-400 focus:outline-none"
                                                placeholder="Enter your pincode"
                                                required
                                          />
                                    </div>
                                    <div className="w-full sm:w-[48%]">
                                          <Label htmlFor="city">City*</Label>
                                          <Input
                                                type="text"
                                                id="city"
                                                className="w-full p-2 rounded-[17px] py-[1rem] px-6 bg-[#fff] text-black placeholder-gray-400 focus:outline-none"
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
                                          className="w-full p-2 rounded-[17px] py-[1rem] px-6 bg-[#fff] text-black placeholder-gray-400 focus:outline-none"
                                          placeholder="Enter your state"
                                          required
                                    />
                              </div>

                              <div className="mb-4">
                                    <Label htmlFor="address">Address</Label>
                                    <Input
                                          id="address"
                                          className="w-full p-2 rounded-[17px] py-[1rem] px-6 bg-[#fff] text-black placeholder-gray-400 focus:outline-none"
                                          placeholder="Enter your address"
                                    />
                              </div>

                              <div className="mb-4 flex justify-center ">
                                    <Chackbox type="checkbox" id="gst" className="mr-5 " />
                                    <Label htmlFor="gst" className="mt-2" >Do You Have GST?</Label>
                              </div>

                              <div className="flex justify-end">
                              <Button type="button"  className=""> Next</Button>
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
  font-family:' Inter', 'sans-serif';
font-size: 20px;
font-weight: 400;
line-height: 24.2px;
text-align: left;
color:#FFFFFF;
margin-bottom:10px;
text-underline-position: from-font;
text-decoration-skip-ink: none;

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
  color: white; 
  ::placeholder {
    color: #333;  
  }
  outline: none;  
  font-family: 'Inter', sans-serif;  
  font-size: 1rem; 
  font-weight: normal;  
  opacity: 1; 
  
  /* Focus styling */
  &:focus {
    outline: none;
    ring: 2px solid blue;  
  }
`;

const Chackbox = styled.input`
  width:20px;
  `


const Button = styled.button`
  width: 181px;
height: 74px;
border-radius: 17px ;
opacity: 0px;
background-color:#CB935D;
font-family: "Inter";
font-size: 20px;
font-weight: 400;
line-height: 24.2px;
text-align: center;
text-underline-position: from-font;
text-decoration-skip-ink: none;


  
  `

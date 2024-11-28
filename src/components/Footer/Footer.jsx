// src/Footer.jsx  
import React from 'react';
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
      return (
            <footer className="bg-[#1b1c2e] text-white py-10">
                  <div className="container mx-auto text-center">
                        <div className="flex justify-center space-x-4 mb-2">
                              <a href="#" className="bg-[#CB935D] p-2 rounded-full  ">
                                    <FaFacebookF size={24} className='text-[#000000] '  />
                              </a>
                              <a href="#" className="bg-[#CB935D] p-2 rounded-full">
                                    <FaTelegramPlane size={24} className='text-[#000000] '   />
                              </a>
                              <a href="#" className="bg-[#CB935D] p-2 rounded-full">
                                    <FaInstagram size={24} className='text-[#000000] '   />
                              </a>
                              <a href="#" className="bg-[#CB935D] p-2 rounded-full">
                                    <FaGithub size={24} className='text-[#000000] '   />
                              </a>
                              <a href="#" className="bg-[#CB935D] p-2 rounded-full">
                                    <FaLinkedinIn  size={24} className='text-[#000000] '   />
                              </a>
                        </div>
                        <div className="mb-[40px] mt-[40px] flex justify-center gap-10">
                              <a href="#" className="text-[16px] font-[Roboto] text-[#CB935D]">Programmes</a>
                              <a href="#" className="text-[16px] font-[Roboto] text-[#CB935D]">Faculty</a>
                              <a href="#" className="text-[16px] font-[Roboto] text-[#CB935D]">Infrastructure</a>
                              <a href="#" className="text-[16px] font-[Roboto] text-[#CB935D]">Events</a>
                              <a href="#" className="text-[16px] font-[Roboto] text-[#CB935D]">Placements</a>
                        </div>
                        <div className="mb-4">
                              <a href="#" className=" w-[150px] h-[50px] bg-[#CB935D] text-[#000000] text-[16px] px-[26px] py-3 rounded-full">Contact Us</a>
                        </div>
                        <p className=" text-[#FFFFFF] text-[12px] font-light ">© 2022 All Rights Reserved</p>
                        <hr className='text-[#FFFFFF]  ' />
                  </div>
            </footer>
      );
};

export default Footer;
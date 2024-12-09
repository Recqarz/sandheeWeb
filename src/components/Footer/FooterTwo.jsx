import React from 'react'
import { FaMapLocationDot } from 'react-icons/fa6';
import { MdEmail, MdPhone } from 'react-icons/md';

const FooterTwo = ({ className }) => {
      return (
            <footer className={`bg-[#1b1c2e] w-screen  flex justify-center text-white py-10 px-0 ${className}`}>
                  <div className="max-w-[1782px] w-full px-4 sm:px-10 flex flex-col  justify-center items-center text-center">
                        <div className="footer-header mb-4">
                              <h1 className="text-xl sm:text-2xl font-bold">SANDHEE ADR</h1>
                        </div>
                        <div className="mb-4 w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center space-y-4">
                              <div className="flex items-center">
                                    <MdEmail className="text-blue-500 text-2xl mr-2" />
                                    <span className="text-white font-[400] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[32px]">
                                          gauraav@sandhee.com
                                    </span>
                              </div>
                              <div className="flex gap-2 ml-[1rem] ">
                                    <FaMapLocationDot className="text-green-500 text-2xl  " />
                                    <span className="text-white font-[400] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[32px]">
                                          293, Second Floor Westend <br className='block sm:hidden' /> Marg New Delhi
                                    </span>
                              </div>
                              <div className="flex  items-center">
                                    <MdPhone className="text-green-500 text-2xl mr-2" />
                                    <span className="text-white font-[400] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[32px]">
                                          +91 92664 34364
                                    </span>
                              </div>
                        </div>
                        <p className="text-[#FFFFFF] text-[10px] sm:text-[12px] font-light">
                              © 2024 All Rights Reserved
                        </p>
                        <div className="bg-white w-full mt-4">
                              <hr className="border-[#FFFFFF]" />
                        </div>
                  </div>


            </footer>
      )
}

export default FooterTwo
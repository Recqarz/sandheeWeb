import React from 'react'
import { MdEmail, MdPhone } from 'react-icons/md';

const FooterTwo = ({className}) => {
  return (
      <footer className={`bg-[#1b1c2e]  flex justify-center text-white py-10 px-0 ${className}`}>
      <div className="2xl:max-w-[1782px] w-full flex flex-col justify-center items-center text-center">
            <div className='footer-header'>
                  <h1>SANDHEE ADR</h1>
            </div>
            <div className="mb-4 w-full flex 2xl:flex-row flex-col justify-between items-center">
                  <div className="flex items-center mb-2">
                        <MdEmail className="text-blue-500 text-2xl mr-2" />
                        <span className="text-white font-[400] text-[16px] leading-[32px]">info@sandhee.com</span>
                  </div>
                  <div className="flex items-center mr-5">
                        <MdPhone className="text-green-500 text-2xl mr-2" />
                        <span className="text-white font-[400] text-[16px] leading-[32px">+91 92664 34364</span>
                  </div>
            </div>
            <p className=" text-[#FFFFFF] text-[12px] font-light ">© 2024 All Rights Reserved</p>
            <div className='bg-white w-full'>
                  <hr className='text-[#FFFFFF]  ' />
            </div>
      </div>
</footer>
  )
}

export default FooterTwo
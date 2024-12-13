import React, { useState } from 'react';
import ErrorImage from '../../assets/error1.avif';

const ErrorPage = () => {
  const handleWindowClick = (e) => {
    if (e.target.tagName !== 'IMG') {
      window.location.href = '/';
    }
  };

  const handleImageClick = () => {
    window.location.href = '/';
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen"
      onClick={handleWindowClick}
    >
      <div className="absolute top-10 w-full text-center">
        <div className="marquee overflow-hidden whitespace-nowrap">
          <marquee behavior="" direction="">
            <span className="text-[24px]  font-[600] text-[#000]">
              Routing Path <strong className='bg-red-700 px-3 text-white' >Incorrect</strong> - Click Anywhere to <strong className='bg-green-600 px-3 text-white'>Return</strong> Home 😔😔
            </span>
          </marquee>
        </div>
      </div>
      <div className="w-[1400px] h-[800px] text-center relative">
        <img
          src={ErrorImage}
          alt="Error"
          className="w-full h-full mx-auto object-contain"
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};

export default ErrorPage;

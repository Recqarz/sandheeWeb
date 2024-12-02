import React, { useState } from 'react';
import ErrorImage from '/public/error1.avif';
const ErrorPage = () => {
  const [showFullPage, setShowFullPage] = useState(false);

  const handleAreaClick = () => {
    setShowFullPage(true); 
  };

  return (
    <div 
      className="flex items-center justify-center h-screen" 
      onClick={handleAreaClick}  
    >
      <div 
        className="w-[1400px] h-[800px] text-center flex items-center justify-center"
      >
        {!showFullPage ? (
          <img
            src={ErrorImage}
            alt="Error"
            className="w-full h-full mx-auto object-contain cursor-pointer"
            onClick={handleAreaClick}  
          />
        ) : (
          <>
            <button
              onClick={() => window.location.href = '/'}
              className="2xl:w-[300px] 2xl:h-[100px] text-[24px] font-[600] bg-[#BF9874] text-[#000] py-2 px-6 rounded-[17px] transition duration-200"
            >
              Go to Home
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
